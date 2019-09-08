/* eslint-disable react/react-in-jsx-scope */
import Meta from './Meta';
import './main.scss';

export default ({ children, className }) => (
  <>
    <Meta />
    <div className={`main ${className}`}>
      { children }
    </div>
  </>
)