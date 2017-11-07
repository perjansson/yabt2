import Head from 'next/head';

const Meta = title => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Burgers!</title>
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
      `}
    </style>
  </div>
);

export default Meta;
