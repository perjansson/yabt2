import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import apiUrl from '../config/apiUrl';

const Burger = ({ name, web }) => (
  <div>
    <Head>
      <title>{name}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <h1>{name}</h1>
    <a href={web} target="_blank">
      &gt;&gt;&gt; Homepage
    </a>
  </div>
);

Burger.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${apiUrl}/api/b/${id}`);
  const burger = await res.json();

  console.log(`Fetched burger: ${burger.name}`);

  return { ...burger };
};

Burger.propTypes = {
  name: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
};

export default Burger;
