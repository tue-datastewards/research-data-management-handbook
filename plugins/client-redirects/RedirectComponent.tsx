import React from "react";

type Props = {
  content?: {
    to?: string;
  };
};

export default function RedirectComponent({ content }: Props): React.ReactElement | null {
  const target = content?.to;

  React.useEffect(() => {
    if (target) {
      window.location.replace(target);
    }
  }, [target]);

  return null;
}
