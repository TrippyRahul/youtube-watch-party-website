import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["image-container"]}>
              <Image
                src="/favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Time sync</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  If you enjoy viewing movies or series with your friends, use
                  this extension and just log in and invite your buddies to
                  join. You all need to log in together to start streaming the
                  movie at the same time and share with them. Once you&apos;re
                  all in, you can have audio and video calls while streaming the
                  movie together. The video quality is high, and the buffering
                  is fast, all in your web browser. It&apos;s a fantastic way to
                  have fun and make movie nights with friends even more
                  exciting.
                </p>
                <p>
                  The best part is with the help of adblocker, you can block all
                  annoying ads and enjoy your favorite content without any
                  disturbance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.headings}>
              <h2>Personalize your own extension</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Simply just click the user icon, and it will unlock some of the
                best features like chat, audio calls, and video calls. With
                Youtube watch party, you can view movie together with friends
                and family and you can also pick your favorite shows and movies
                from the best online streaming platforms.
              </p>
              <p>
                To view unlimited series without any disturbance, use{" "}
                <span> block youtube ads </span>with{" "}
                <span> youtube ad blocker Chrome. </span>
                Enjoy the high-quality streaming that is synchronized for
                everyone, so that you can have your fantastic time together.
                It’s the best way to create special moments with your loved
                ones.
              </p>
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/customize.svg"
                alt="customize"
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

export default Favorite;
