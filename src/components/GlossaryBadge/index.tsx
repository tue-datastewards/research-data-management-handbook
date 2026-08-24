import React from "react";

function slugify(codataUri: string): string {
  const path = codataUri.replace(/^https:\/\/terms\.codata\.org\/rdmt\//, "");
  return (
    "term-" +
    path
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  );
}

export type GlossaryBadgeInfo = {
  href: string;
  anchorId: string;
};

export const GlossaryBadgeContext = React.createContext<GlossaryBadgeInfo | null>(null);

export function useGlossaryBadge(): GlossaryBadgeInfo | null {
  return React.useContext(GlossaryBadgeContext);
}

export function createGlossaryBadgeInfo(codataUri: string): GlossaryBadgeInfo | null {
  if (!codataUri || typeof codataUri !== "string") return null;

  const anchor = slugify(codataUri);

  return {
    href: "/docs/glossary/#" + anchor,
    anchorId: anchor,
  };
}
