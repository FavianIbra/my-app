import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link 
            rel="preload"
            href="/fonts/UnitedKingdom.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link 
            rel="preload"
            href="/fonts/Orbitron-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link 
            rel="preload"
            href="/fonts/SourceCodePro-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument