import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import apiUrl from '../config/apiUrl';

const Burger = ({ name, web }) => (
  <div>
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
