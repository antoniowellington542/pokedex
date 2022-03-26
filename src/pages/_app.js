import React from 'react';
import '../../styles/globals.css';
import { LoadingProvider } from '../AppContext/LoadingContext';
import { PaginationProvider } from '../AppContext/PaginationContext';
import PokemonProvider from '../AppContext/PokemonContext';
import Navbar from '../components/Navbar/Navbar';

const  MyApp = ({ Component, pageProps })=> {

  return (
    <PokemonProvider>
      <LoadingProvider>
        <PaginationProvider>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "0px"
          }}>
            <Navbar/>
              <Component {...pageProps} />
          </div>
        </PaginationProvider>
      </LoadingProvider>
    </PokemonProvider>
  );
}

export default MyApp
