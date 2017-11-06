import { string } from 'prop-types';
import fetch from 'isomorphic-unfetch';

import { apiUrl } from '../config/config';

const Burger = ({ name, web }) => (
  <div>
    <h1>{name}</h1>
    <a href={web} target="_blank">
      homepage
    </a>
  </div>
);

Burger.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${apiUrl}/api/b/api/b/${id}`);
  const burger = await res.json();

  console.log(`Fetched burger: ${burger.name}`);

  return { ...burger };
};

Burger.propTypes = {
  name: string.isRequired,
  web: string.isRequired,
};

export default Burger;
