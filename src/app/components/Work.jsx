"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const steps = [
  { id: 1, text: "Go to your browser" },
  {
    id: 2,
    text: "Search for adblocker",
  },
  {
    id: 3,
    text: "Download the extension",
  },
  {
    id: 4,
    text: "Add to Chrome",
  },
];

const Work = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How to watch youtube without ads?</h2>
        <p className={styles.stepPara}>
          It’s a very simple and easy process. You need to download the Youtube
          watch party and add it to Chrome. With this extension, you can enjoy
          youtube ad free content without any interruptions.
        </p>

        <p className={styles.stepPara}>
          How to install the <span> youtube ad blocker Firefox </span> feature?
        </p>
        <p className={styles.stepPara}>
          These are the simple steps to download the browser extension :{" "}
        </p>

        {!isMobile && (
          <div className={styles.content}>
            <div className={styles.timeline}>
              <div className={styles.item}>
                <div className={styles.first}></div>
                <div className={styles.second}>
                  <div className={styles["image-container"]}>
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle1.svg"
                      alt="semi-circle"
                    />
                  </div>
                  <p>Go to your browser</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.first}>
                  <p>Search for adblocker</p>
                  <div
                    className={styles["image-container"]}
                    style={{ marginBottom: "-.6rem" }}
                  >
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle2.svg"
                      alt="semi-circle"
                    />
                  </div>
                </div>
                <div className={styles.second}></div>
              </div>
              <div className={styles.item}>
                <div className={styles.first}></div>
                <div className={styles.second}>
                  <div className={styles["image-container"]}>
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle1.svg"
                      alt="semi-circle"
                    />
                  </div>
                  <p>Download the extension</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.first}>
                  <p>Add to Chrome</p>
                  <div
                    className={styles["image-container"]}
                    style={{ marginBottom: "-.6rem" }}
                  >
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle2.svg"
                      alt="semi-circle"
                    />
                  </div>
                </div>
                <div className={styles.second}></div>
              </div>
            </div>
          </div>
        )}

        {isMobile && (
          <ul className={styles.steps}>
            {steps.map((step) => (
              <li className={styles.stepPara} key={step.id}>
                {step.text}
              </li>
            ))}
          </ul>
        )}

        <p className={styles.stepPara}>
          After completing these steps, it will automatically start running on
          your browser.
        </p>
      </div>
    </div>
  );
};

export default Work;
