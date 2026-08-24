import { ComponentProps } from "react";
import MDXHeading from "@theme/MDXComponents/Heading";
import React from "react";
import { useGlossaryBadge } from "@site/src/components/GlossaryBadge";
import styles from "./styles.module.css";

export type H1Props = ComponentProps<"h1"> & {
  componentRef?: React.RefObject<HTMLHeadingElement>;
};

export default function DocH1({ componentRef, ...rest }: H1Props) {
  const badgeInfo = useGlossaryBadge();

  if (!badgeInfo) {
    return <MDXHeading as="h1" componentRef={componentRef} {...rest} />;
  }

  return (
    <MDXHeading as="h1" componentRef={componentRef} className={styles.docH1} {...rest}>
      {rest.children as React.ReactNode}
      <a
        href={badgeInfo.href}
        className={styles.glossaryLink}
        title="See definition in the glossary"
      >
        <span className={styles.badgeIcon}>?</span>
      </a>
    </MDXHeading>
  );
}
