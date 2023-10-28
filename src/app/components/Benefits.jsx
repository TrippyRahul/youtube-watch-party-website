import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Create your own watching room with this extension</h2>
            </div>
            <div className={styles.desc}>
              <p>
                With this extension, you can create your very own virtual
                <span> watching room. </span> Invite your friends and family to
                join, and together, you can synchronize your favorite movies or
                shows. You can also share your movie experience via chat and
                audio and video calls and discuss and immerse yourselves in
                entertainment from the comfort of your own homes.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="/benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
