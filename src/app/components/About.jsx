import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About</h2>
            </div>
            <div className={styles.desc}>
              <p>
                It is a useful extension that allows you to view in real-time
                with your best buddy. It enables synchronized playback, chat,
                video and audio calls so that you can enjoy the content and
                simultaneously interact while viewing. You can also create your
                own party or join an existing one, enhancing the shared viewing
                experience and fostering a sense of togetherness even when you
                are physically apart.
              </p>
              <p>
                With this extension, you can{" "}
                <span> watch movies with friends online </span>
                and can discuss scenes, and share reactions at the same time.
              </p>
              <p>
                To experience these incredible features, you need to download
                the extension.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
