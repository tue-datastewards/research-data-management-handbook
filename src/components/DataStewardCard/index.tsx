import type { ReactNode } from "react"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import stewardsData from "@site/data/data-stewards.json"

type DataSteward = {
  name: string
  email: string
  imageUrl: string
  orcid?: string
  role: string
  departments?: string[]
}

function OrcidIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      className={styles.orcidIcon}
    >
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.563 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.209-3.722-3.891-3.722h-2.428z" />
    </svg>
  )
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

function FallbackAvatar({ name }: { name: string }): ReactNode {
  return (
    <div className={styles.fallbackAvatar} aria-hidden="true">
      {getInitials(name)}
    </div>
  )
}

function DataStewardCard({
  name,
  email,
  imageUrl,
  orcid,
  role,
  departments,
}: DataSteward): ReactNode {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name}'s profile picture`}
            className={styles.cardImage}
          />
        ) : (
          <FallbackAvatar name={name} />
        )}
      </div>
      <div className={styles.cardContent}>
        <Heading as="h3" className={styles.cardName}>
          {name}
        </Heading>
        <p className={styles.cardRole}>{role}</p>
        <a href={`mailto:${email}`} className={styles.cardEmail}>
          {email}
        </a>
        {orcid ? (
          <a
            href={`https://orcid.org/${orcid}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardOrcid}
          >
            <OrcidIcon />
            {orcid}
          </a>
        ) : (
          <div className={styles.cardOrcidPlaceholder} />
        )}
        {departments && departments.length > 0 && (
          <div className={styles.cardDepartments}>
            {departments.map((dept) => (
              <span key={dept} className={styles.cardDepartment}>
                {dept}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function DataStewardCards(): ReactNode {
  const stewards = stewardsData as DataSteward[]

  return (
    <div className={styles.grid}>
      {stewards.map((steward) => (
        <DataStewardCard key={steward.email} {...steward} />
      ))}
    </div>
  )
}
