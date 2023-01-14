import Document, {
  Html,
  Head,
  Main,
  NextScript
} from "next/document";
import Script from "next/script";
//comment
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap"
            rel="stylesheet"
          />
          <Script
            id="Adsense-id"
            data-ad-client="ca-pub-5000031567742123"
            async="true"
            strategy="beforeInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            onError={ (e) => { console.error('Script failed to load', e) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
