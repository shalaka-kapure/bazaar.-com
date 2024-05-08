import React from 'react';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';

const Home = () => {

  return ( 
    <div style={{overflowX: "hidden"}}>
      <Slider/>
      <Categories/>
      <Newsletter/>
    </div>
  );
}

export default Home;
 