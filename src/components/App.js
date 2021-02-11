import React from 'react';
import Banner from './Banner';
import BottomInfo from './BottomInfo';
import Footer from './Footer';
import Shirt from './Shirt';
import ShirtControl from './ShirtControl';
import Hats from './Hats';
import Posters from './Posters';
import Vinyl from './Vinyl';

function App() {
  return (
    <>
    <Banner />
    {/* <BottomInfo />
    <Footer />
    <Hats />
    <Posters />
    <Vinyl /> */}
    <Shirt />
    <ShirtControl />
    </>
  );
}

export default App;
