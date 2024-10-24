import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>

            <Spline scene="https://prod.spline.design/aYXoH9efXSs-k-71/scene.splinecode"/>
        </div>
    );
};

export default SplineBackground;