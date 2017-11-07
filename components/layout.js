import { func, oneOfType, arrayOf, node } from 'prop-types';

import Meta from '../components/meta';

const layoutStyle = {
  padding: '0 20px 20px 20px',
  border: '1px solid #DDD',
};

const Layout = ({ renderHeader, children }) => [
  <Meta key="head" />,
  <div key="body" style={layoutStyle}>
    {renderHeader()}
    {children}
  </div>,
];

Layout.propTypes = {
  renderHeader: func,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

Layout.defaultProps = {
  renderHeader: () => {},
};

export default Layout;
