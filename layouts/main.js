/* eslint-disable react/react-in-jsx-scope */
import Meta from './Meta';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import { Scrollbars } from 'react-custom-scrollbars';

import './main.scss';

export default ({ children, className }) => (
  <>
    <Scrollbars style={{height: 'calc(100vh)', width: '100%', overFlowX: 'hidden'}}>
      <Meta />
      <Header />
      <div className={`main ${className}`}>
        { children }
      </div>
      <Footer />
    </Scrollbars>
  </>
)