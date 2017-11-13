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
        </Head>
        <body className="sans-serif">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
