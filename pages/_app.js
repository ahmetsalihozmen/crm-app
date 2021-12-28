import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'
import Navbar from './components/navbar';


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const showHeader = router.pathname === '/' ? false : true;
  return (
  <div>
    {showHeader && (<Navbar/>)}
    <Component {...pageProps} />
  </div>

  )
}

export default MyApp
