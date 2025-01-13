import React from 'react';
import Products from './Products/Products';
import SearchUser from './SearchUser/SearchUser';
import Object from './Object/Object';
import DynamicForm from './DynamicForm/DynamicForm';

const Homepage = () => {
    return (
        <div>
            <DynamicForm/>
            <SearchUser/>
            <Products/>
            {/* <Object/> */}
        </div>
    );
};

export default Homepage;