import React from 'react';
import Products from './Products/Products';
import SearchUser from './SearchUser/SearchUser';

const Homepage = () => {
    return (
        <div>
            <SearchUser/>
            <Products/>
            
        </div>
    );
};

export default Homepage;