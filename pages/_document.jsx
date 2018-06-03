import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html xmlns="http://www.w3.org/1999/xhtml" xmlnsFb="http://ogp.me/ns/fb#">

        <Head>
          <title>What is that is Fun?</title>
          <link rel="stylesheet" href="/_next/static/style.css"/>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
          <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no"/>
          <meta property="og:image" content="/static/moffat.png"/>
        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>

      </html>
    )
  }
}