// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default RootLayouts;