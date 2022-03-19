import '../../styles/globals.css';

import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "0px"
    }}>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
