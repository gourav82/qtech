import Footer from '../componant/Footer'
import Header from '../componant/Header'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-modern-drawer/dist/index.css'


export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
