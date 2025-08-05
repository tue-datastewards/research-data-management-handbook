import styles from "./styles.module.css"
import React, { useRef } from "react"
import CopyRichTextButton from "@site/src/components/BlockQuoteWithCopy/CopyRichTextButton"

export default function BlockQuoteWithCopy(props: React.PropsWithChildren) {
  const quoteRef = useRef<HTMLQuoteElement>(null)

  async function onCopyButtonClick() {
    const outerHTML = quoteRef.current.outerHTML
    const innerText = quoteRef.current.innerText

    const clipboardItem = new ClipboardItem({
      ["text/html"]: outerHTML,
      ["text/plain"]: innerText,
    })

    await navigator.clipboard.write([clipboardItem])
  }

  return (
    <div className={styles.container}>
      <blockquote className={styles.blockquote} ref={quoteRef}>
        {props.children}
      </blockquote>
      <div className={styles.buttonContainer}>
        <CopyRichTextButton
          className={styles.copyButton}
          onClick={onCopyButtonClick}
        />
      </div>
    </div>
  )
}
