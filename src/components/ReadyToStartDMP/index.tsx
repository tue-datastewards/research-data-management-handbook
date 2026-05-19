import React, { ReactNode } from "react";
import ScreenshotResearchCockpit from "@site/static/img/screenshot-research-cockpit.jpg";
import styles from "./styles.module.css";

export default function ReadyToStartDMP(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <a href="https://cockpit.research.tue.nl" target="_blank">
          <img
            src={ScreenshotResearchCockpit}
            alt="Screenshot of Research Cockpit"
            className={styles.screenshot}
          />
        </a>
        <h2>Ready to start your Data Management Plan?</h2>
        <p>
          Are you ready to prepare your Data Management Plan? Visit Research
          Cockpit to start preparing your plan.
        </p>
        <p>
          You can also start an Ethical Approval, or request research tools
          available at TU/e.
        </p>
        <button
          className="button button--primary button--lg"
          onClick={() =>
            window.open("https://cockpit.research.tue.nl", "_blank")
          }
        >
          Go to Research Cockpit
        </button>
      </div>
    </section>
  );
}
