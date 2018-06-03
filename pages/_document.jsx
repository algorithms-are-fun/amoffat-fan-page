import Document, { Head, Main, NextScript } from 'next/document'
import "../styles/master.scss"

export default class extends Document {
  render() {
    return (
      <html>
      
        <Head>
          <title>What is that is Fun?</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </html>
    )
  }
}