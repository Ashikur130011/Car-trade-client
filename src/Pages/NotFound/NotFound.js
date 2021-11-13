import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="p-5">
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <button className="bg-dark text-white fw-bold px-3 my-5">
          <Link style={{textDecoration:"none", color:"white"}} to="/home">Home</Link>
        </button>
      </div>
    );
};

export default NotFound;