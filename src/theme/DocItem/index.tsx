import React from "react";
import DocItem from "@theme-original/DocItem";
import type { DocItem as DocItemType } from "@theme/DocItem";
import type { Props } from "@theme/DocItem";
import { GlossaryBadgeContext, createGlossaryBadgeInfo } from "@site/src/components/GlossaryBadge";

type DocItemContent = Parameters<DocItemType>[0]["content"];

export default function DocItemWrapper(props: Props) {
  const content = props.content as unknown as {
    frontMatter: Record<string, unknown>;
  };
  const badgeInfo = createGlossaryBadgeInfo(content.frontMatter?.codata_uri as string | undefined);

  return (
    <GlossaryBadgeContext.Provider value={badgeInfo}>
      <DocItem {...props} />
    </GlossaryBadgeContext.Provider>
  );
}
