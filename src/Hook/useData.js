import React, { useEffect, useState } from 'react';

const useData = () => {
    const [products, setProducts] = useState();
    useEffect( () => {
        fetch("https://stormy-coast-87051.herokuapp.com/cars")
        .then(res => res.json())
        .then(data => {
            setProducts(data)

        })
    },[])
    return {
        products,
        setProducts
    };
};

export default useData;