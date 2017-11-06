import { arrayOf, object } from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import apiUrl from '../config/apiUrl';

const Index = ({ burgers }) => (
  <div>
    <h1>Burgers</h1>
    <ul>
      {burgers.map(burger => (
        <li key={burger.id}>
          <Link as={`/b/${burger.id}`} href={`/burger?id=${burger.id}`}>
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
  burgers: arrayOf(object).isRequired,
};

export default Index;
