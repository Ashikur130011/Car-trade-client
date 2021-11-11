import React, { useEffect } from 'react';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    useEffect(()=>{
        fetch("https://stormy-coast-87051.herokuapp.com/cars")
        .then(res=>res.json()).then(data=>{
            console.log(data);
        })
    },[])
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Products/>


        </div>
    );
};

export default Home;