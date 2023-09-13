"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isYoutubeWatchParty, setYoutubeWatchParty] = useState(false);

  const checkYoutubeWatchParty = () => {
    if (
      typeof window !== "undefined" &&
      window.location.href.includes("youtubewatchparty")
    ) {
      setYoutubeWatchParty(true);
    }
  };

  useEffect(() => {
    checkYoutubeWatchParty();
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href={isYoutubeWatchParty ? "/youtubewatchparty" : "/"}>
              <div className={styles["image-container"]}>
                <Image
                  src="/main-logo.svg"
                  alt="ott-party"
                  fill={true}
                  className={styles["image"]}
                />
              </div>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href={isYoutubeWatchParty ? "/" : "/youtubewatchparty"}>
              {isYoutubeWatchParty ? "Youtube Party " : "Youtube Watch Party"}
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="#features">Features</Link>
          </li>
          <li className={styles.link}>
            <Link href="#how-it-works">How It Works</Link>
          </li>
          <li className={styles.link}>
            <Link
              href={
                isYoutubeWatchParty
                  ? "/youtubewatchparty/mp-4-downloader"
                  : "/mp-4-downloader"
              }
            >
              mp4 downloader
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              href={
                isYoutubeWatchParty
                  ? "/youtubewatchparty/mp-3-converter"
                  : "/mp-3-converter"
              }
            >
              mp3 converter
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              href={
                isYoutubeWatchParty ? "/youtubewatchparty/support" : "/support"
              }
            >
              Support
            </Link>
          </li>
        </ul>
        <a href="#" className={styles.hideBtn}>
          <Button />
        </a>

        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <Link href={isYoutubeWatchParty ? "/youtubewatchparty" : "/"}>
            <div className={styles["image-container"]}>
              <Image
                src="/logo.svg"
                alt="ott-party"
                fill={true}
                className={styles["image"]}
              />
            </div>
          </Link>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href={isYoutubeWatchParty ? "/youtubewatchparty" : "/"}>
                {" "}
                {isYoutubeWatchParty ? "Youtube Party " : "Youtube Watch Party"}
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="#features">Features</Link>
            </li>
            <li className={styles.link}>
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li className={styles.link}>
              <Link
                href={
                  isYoutubeWatchParty
                    ? "/youtubewatchparty/mp-4-downloader"
                    : "/mp-4-downloader"
                }
              >
                mp4 downloader
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                href={
                  isYoutubeWatchParty
                    ? "/youtubewatchparty/mp-3-converter"
                    : "/mp-3-converter"
                }
              >
                mp3 converter
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                href={
                  isYoutubeWatchParty
                    ? "/youtubewatchparty/support"
                    : "/support"
                }
              >
                Support
              </Link>
            </li>
          </ul>
          <Button />
        </div>
      )}
    </>
  );
};

export default Navbar;
