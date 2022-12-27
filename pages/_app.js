import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      { process.env.NEXT_PUBLIC_GOOGLE_ADS_ID &&
        <Script
          id="Adsense-id"
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}
          async="true"
          strategy="beforeInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      }
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
