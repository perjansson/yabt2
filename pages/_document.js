import NextDocument, { Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <html lang="sv">
        <Head>
          <title>Yet Another Burger Tested</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="A Burger Test Progressive Web App built using Next.js"
          />
          <meta name="theme-color" content="#f4b342" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="dns-prefetch" href="//yetanotherburgertested.herokuapp.com" />
          <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
        </Head>
        <style jsx global>
          {`
            * {
              font-family: 'Space Mono', monospace;
            }

            body {
              margin: 0;
              padding: 0;
            }

            h1 {
              margin-bottom: 0;
            }

            a {
              text-decoration: none;
              color: #fff;
              text-shadow: 3px 3px 6px #000;
            }
          `}
        </style>
        <body className="sans-serif">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
