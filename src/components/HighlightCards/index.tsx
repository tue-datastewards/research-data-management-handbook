import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { LockKeyhole } from "lucide-react";

export default function HighlightCards(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row gx-5">
          <div className={clsx("col", styles["bg-card"])}>
            <h2>Ready to start your Data Management Plan?</h2>
            <p>
              Are you ready to prepare your Data Management Plan? Visit Research
              Cockpit to start preparing your plan. You can also start an
              Ethical Approval, or request research tools available at TU/e.
            </p>
            <div className="text--center">
              <a
                className="button button--primary button--lg"
                href="https://cockpit.research.tue.nl"
                target="_blank"
              >
                Go to Research Cockpit
                <LockKeyhole
                  size={10}
                  strokeWidth={2.5}
                  style={{ marginLeft: "0.50rem" }}
                />
              </a>
            </div>
          </div>
          <div className={clsx("col", styles["bg-card"])}>
            <h2>Join our Data Bites sessions!</h2>
            <p>
              Join our series of online sessions designed to spread awareness on
              various topics related to Research Data Management. This is an
              opportunity to take a short break from your busy day, and learn
              something new and useful!
            </p>
            <div className="text--center">
              <a
                className="button button--primary button--lg"
                href="/docs/learning-resources/data-bites/#schedule-2026"
                target="_blank"
              >
                See the upcoming sessions
              </a>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className={clsx("col", styles["bg-card"])}>
            <h2>Make your data more useful!</h2>
            <p>
              Are you a student/researcher with a dataset that you'd like to
              organise better, document properly, and prepare for (future)
              sharing in repositories such as 4TU.ResearchData or Zenodo?
            </p>
            <div className="text--center">
              <a
                className="button button--primary button--lg"
                href="/docs/learning-resources/fair-clinic/"
                target="_blank"
              >
                Join the FAIR Data Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
