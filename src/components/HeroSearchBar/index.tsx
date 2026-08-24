import React, { useRef, useCallback, useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from "@docusaurus/useGlobalData";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useHistory } from "@docusaurus/router";

import "docusaurus-lunr-search/src/theme/SearchBar/algolia.css";

const HeroSearchBarInner = () => {
  const initialized = useRef(false);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [indexReady, setIndexReady] = useState(false);
  const history = useHistory();
  const { siteConfig = {} } = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  const { baseUrl } = siteConfig;
  const pluginConfig = (siteConfig.plugins || []).find(
    (plugin: any) =>
      Array.isArray(plugin) &&
      typeof plugin[0] === "string" &&
      plugin[0].includes("docusaurus-lunr-search")
  );
  const assetUrl = pluginConfig?.[1]?.assetUrl || baseUrl;

  const pluginData = usePluginData("docusaurus-lunr-search") as any;

  const initSearch = useCallback(
    async (searchDocs: any[], searchIndex: any[]) => {
      if (!searchBarRef.current || initialized.current) return;

      const { default: DocSearch } = await import(
        "docusaurus-lunr-search/src/theme/SearchBar/DocSearch"
      );

      new DocSearch({
        searchDocs,
        searchIndex,
        baseUrl,
        inputSelector: "#hero_search_input",
        handleSelected: (_input: any, _event: any, suggestion: any) => {
          const url = suggestion.url || "/";
          const a = document.createElement("a");
          a.href = url;
          _input.setVal("");
          _event.target.blur();

          let wordToHighlight = "";
          try {
            const matchedLine =
              suggestion.text || suggestion.subcategory || suggestion.title;
            const matchedWordResult = matchedLine.match(
              new RegExp("<span.+span>\\w*", "g")
            );
            if (matchedWordResult && matchedWordResult.length > 0) {
              const tempDoc = document.createElement("div");
              tempDoc.innerHTML = matchedWordResult[0];
              wordToHighlight = tempDoc.textContent;
            }
          } catch (e) {
            console.log(e);
          }

          history.push(url, {
            highlightState: { wordToHighlight },
          });
        },
      });

      // Ctrl/Cmd + K shortcut
      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
          e.preventDefault();
          searchBarRef.current?.focus();
        }
      });

      initialized.current = true;
      setIndexReady(true);
    },
    [baseUrl, history]
  );

  const loadSearch = useCallback(async () => {
    if (initialized.current) return;
    if (process.env.NODE_ENV !== "production") return;

    const searchDocFile = await fetch(
      `${assetUrl}${pluginData.fileNames.searchDoc}`
    ).then((r) => r.json());
    const searchIndex = await fetch(
      `${assetUrl}${pluginData.fileNames.lunrIndex}`
    ).then((r) => r.json());

    const { searchDocs } = searchDocFile;
    if (!searchDocs || searchDocs.length === 0) return;
    initSearch(searchDocs, searchIndex);
  }, [initSearch, assetUrl, pluginData]);

  useEffect(() => {
    if (isBrowser) {
      loadSearch();
    }
  }, [isBrowser, loadSearch]);

  const placeholder = isBrowser
    ? window.navigator.platform.startsWith("Mac")
      ? "Search \u2318+K"
      : "Search Ctrl+K"
    : "Search...";

  return (
    <div className="hero-search-bar">
      <input
        id="hero_search_input"
        ref={searchBarRef}
        type="search"
        placeholder={indexReady ? placeholder : "Loading search..."}
        aria-label="Search"
        className="hero-search-bar__input"
        onClick={loadSearch}
        onMouseOver={loadSearch}
        disabled={!indexReady}
      />
    </div>
  );
};

const HeroSearchBar = () => (
  <BrowserOnly fallback={<div className="hero-search-bar" />}>
    {() => <HeroSearchBarInner />}
  </BrowserOnly>
);

export default HeroSearchBar;
