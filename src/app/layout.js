import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Have a blast with the Youtube watch party",
  description:
    "Youtube Watch Party: endless videos, movies, series & more. Chat, audio/video call while streaming together. Entertainment & fun in one place!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.youtubewatchparty.com/" />

        <meta
          property="og:url"
          content="https://www.youtubewatchparty.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Have a blast with the Youtube watch party " />
        <meta
          property="og:description"
          content="Youtube Watch Party: endless videos, movies, series & more. Chat, audio/video call while streaming together. Entertainment & fun in one place!"
        />
        <meta
          property="og:image"
          content="https://www.youtubewatchparty.com/main-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="youtubewatchparty.com" />
        <meta
          property="twitter:url"
          content="https://www.youtubewatchparty.com/"
        />
        <meta name="twitter:title" content="Have a blast with the Youtube watch party " />
        <meta
          name="twitter:description"
          content="Youtube Watch Party: endless videos, movies, series & more. Chat, audio/video call while streaming together. Entertainment & fun in one place!"
        />
        <meta
          name="twitter:image"
          content="https://www.youtubewatchparty.com/main-logo.svg"
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
