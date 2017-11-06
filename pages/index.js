import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';

import apiUrl from '../config/apiUrl';

const Index = ({ burgers }) => (
  <div>
    <Head>
      <title>Burgers!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <h1>Burgers!</h1>
    <ul>
      {burgers.map(burger => (
        <li key={burger.id}>
          <Link prefetch as={`/b/${burger.id}`} href={`/burger?id=${burger.id}`}>
            <a>{burger.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async () => {
  const res = await fetch(`${apiUrl}/api/b`);
  const burgers = await res.json();

  console.log(`Fetched number of burgers: ${burgers.length}`);

  return { burgers };
};

Index.propTypes = {
  burgers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Index;
