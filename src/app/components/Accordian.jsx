"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "How to watch youtube together?",
    ans: "To watch the shows together, download the extension and start a Watch Party and invite friends to join for synchronized video playback and real-time chat.",
  },
  {
    id: 2,
    ques: "What is a watch party on Youtube?",
    ans: "With this extension, you and your friends can view videos together at the same time. While watching, you can chat and make real-time audio and video calls. It's like having a virtual movie night or sharing fun content in a group!",
  },
  {
    id: 3,
    ques: "Can you share your screen with this extension?",
    ans: "Yes, while using this extension, you can definitely share your screen with your dear ones and enjoy the hub of movies and series altogether.",
  },
  {
    id: 4,
    ques: "Does it has a watch party?",
    ans: "Yes, it has a party where you can stream unlimited video content.",
  },
  {
    id: 5,
    ques: "Is it free to use?",
    ans: "Yes, this extension is free to use.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./add-logo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
