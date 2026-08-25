import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import HighlightCards from "@site/src/components/HighlightCards";
import HeroSearchBar from "@site/src/components/HeroSearchBar";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HeroSearchBar />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Home`}
      description="Find how to solve Research Data Management challenges, and to work towards Open & Responsible Science"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HighlightCards />
      </main>
    </Layout>
  );
}
