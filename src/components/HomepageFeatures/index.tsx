import type { ReactElement, ReactNode } from "react"
import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import { Bike, Coffee, Sprout } from "lucide-react"

type FeatureItem = {
  title: string
  href: string
  Icon: typeof Sprout
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: "Before Research",
    Icon: Sprout,
    href: "docs/category/before-research",
    description: (
      <>
        Are you planning your research project? Do you need a Data Management
        Plan? Find out how to prepare for your research project.
      </>
    ),
  },
  {
    title: "During Research",
    href: "docs/category/during-research",
    Icon: Bike,
    description: (
      <>
        Are you conducting your research project? Looking for where to store
        your data?
      </>
    ),
  },
  {
    title: "After Research",
    href: "docs/category/after-research",
    Icon: Coffee,
    description: (
      <>
        Congratulations for finishing your project! Find out how to archive and
        share your data.
      </>
    ),
  },
]

function Feature({ title, Icon, description, href }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Icon size={80} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={href}>{title}</a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
