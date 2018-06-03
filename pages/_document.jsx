import Document, { Head, Main, NextScript } from 'next/document'
import "../styles/master.scss"

export default class extends Document {
  render() {
    return (
      <html>
      
        <Head>
          <title>What is that is Fun?</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no"/>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </html>
    )
  }
}