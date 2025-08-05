import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
  type ReactNode,
} from "react"
import clsx from "clsx"
import { translate } from "@docusaurus/Translate"
import Button from "@site/src/components/BlockQuoteWithCopy/Button"
import IconCopy from "@theme/Icon/Copy"
import IconSuccess from "@theme/Icon/Success"

import styles from "./styles.module.css"

function title() {
  return translate({
    id: "theme.CodeBlock.copy",
    message: "Copy",
    description: "The copy button label on code blocks",
  })
}

function ariaLabel(isCopied: boolean) {
  return isCopied
    ? translate({
        id: "theme.CodeBlock.copied",
        message: "Copied",
        description: "The copied button label on code blocks",
      })
    : translate({
        id: "theme.CodeBlock.copyButtonAriaLabel",
        message: "Copy code to clipboard",
        description: "The ARIA label for copy code blocks button",
      })
}

type CopyRichTextButtonProps = {
  className?: string
  onClick?: () => void
  title?: () => string
}

export default function CopyRichTextButton({
  className,
  onClick = () => {},
}: CopyRichTextButtonProps): ReactNode {
  const [isCopied, setIsCopied] = useState(false)
  const copyTimeout = useRef<number | undefined>(undefined)

  const changeButton = useCallback(() => {
    setIsCopied(true)
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }, [])

  function handleButtonClick() {
    changeButton()
    onClick()
  }

  useEffect(() => () => window.clearTimeout(copyTimeout.current), [])

  return (
    <Button
      aria-label={ariaLabel(isCopied)}
      title={title()}
      className={clsx(
        className,
        styles.copyButton,
        isCopied && styles.copyButtonCopied
      )}
      onClick={handleButtonClick}
    >
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <IconCopy className={styles.copyButtonIcon} />
        <IconSuccess className={styles.copyButtonSuccessIcon} />
      </span>
    </Button>
  )
}
