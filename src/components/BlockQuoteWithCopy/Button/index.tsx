import React, { type ReactNode } from "react"
import clsx from "clsx"

interface CodeBlockButtonProps {
  className?: string
  children?: ReactNode
  title?: string
  onClick?: () => void
}
export default function Button({
  className,
  ...props
}: CodeBlockButtonProps): ReactNode {
  return (
    <button type="button" {...props} className={clsx("clean-btn", className)} />
  )
}
