import '../styles/globals.css';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <BottomNav />
    </SWRConfig>
  );
}

export default MyApp;
