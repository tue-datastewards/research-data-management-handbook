import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

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
      </div>
    </section>
  );
}
