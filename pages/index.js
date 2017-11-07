import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from '../components/layout';

import apiUrl from '../config/apiUrl';

const Index = ({ burgers }) => (
  <Layout key="body" renderHeader={() => <h1>Burgers!</h1>}>
    <ul>
      {burgers.map(burger => (
        <li key={burger.id}>
          <Link prefetch as={`b/${burger.id}`} href={`/burger?id=${burger.id}`}>
            <a>{burger.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx global>
      {`
        ul {
          list-style: none;
        }

        li {
          margin-left: -20px;
          line-height: 60px;
          background: url('/static/images/burger-icon-small.png') no-repeat 0px 12px;
        }

        a {
          margin-left: 50px;
          text-decoration: none;
        }
      `}
    </style>
  </Layout>
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
