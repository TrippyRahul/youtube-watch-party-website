import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to watch youtube together?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To watch the shows together, download the extension and start a Watch Party and invite friends to join for synchronized video playback and real-time chat.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is a watch party on Youtube?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "With this extension, you and your friends can view videos together at the same time. While watching, you can chat and make real-time audio and video calls. It's like having a virtual movie night or sharing fun content in a group!",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you share your screen with this extension?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, while using this extension, you can definitely share your screen with your dear ones and enjoy the hub of movies and series altogether.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does it has a watch party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it has a party where you can stream unlimited video content.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this extension is free to use.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
