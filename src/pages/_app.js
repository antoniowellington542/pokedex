import '../../styles/globals.css';
import AppProvider from '../AppContext/Provider';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0px"
      }}>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

export default MyApp
