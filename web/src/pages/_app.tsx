import {Header} from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
