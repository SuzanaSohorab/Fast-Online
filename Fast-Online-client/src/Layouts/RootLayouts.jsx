// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Components/SharedComponents/Navbar';
import Footer from '../Pages/Components/SharedComponents/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;