import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How to watch youtube without ads?</h2>
        <p>
          It’s a very simple and easy process. You need to download the Youtube
          watch party and add it to Chrome. With this extension, you can enjoy
          youtube ad free content without any interruptions.
        </p>

        <p>
          How to install the <span> youtube ad blocker Firefox </span> feature?
        </p>
        <p>These are the simple steps to download the browser extension : </p>

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

        <p>
          After completing these steps, it will automatically start running on
          your browser.
        </p>
      </div>
    </div>
  );
};

export default Work;
