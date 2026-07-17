import React from "react";
import Link from "@docusaurus/Link";
import { LockKeyhole } from "lucide-react";
import type { Props as LinkProps } from "@theme/MDXComponents/A";
import styles from "./styles.module.css";

const LOGIN_REQUIRED_HOSTS = ["cockpit.research.tue.nl", "gitlab.tue.nl", "tue.atlassian.net"];

function isLoginRequired(href: string): boolean {
  try {
    const url = new URL(href);
    return LOGIN_REQUIRED_HOSTS.some(
      (host) => url.hostname === host || url.hostname.endsWith("." + host),
    );
  } catch {
    return false;
  }
}

export default function LoginLinkWrapper(props: LinkProps): React.ReactNode {
  const href = props.href ?? "";
  const showLock = isLoginRequired(href);

  if (!showLock) {
    return <Link {...props} />;
  }

  const { children, ...rest } = props;
  return (
    <Link {...rest}>
      <span className={styles.lockLink}>
        {children}
        <LockKeyhole className={styles.lockIcon} size={10} strokeWidth={2.5} />
      </span>
    </Link>
  );
}
