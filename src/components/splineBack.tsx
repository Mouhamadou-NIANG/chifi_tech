import React from 'react';
// import bg2 from '../assets/images/bg2.jpg';
import Spline from '@splinetool/react-spline';

const bg2 = require('../assets/images/bg2.jpeg');


const SplineBackground = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg2})`,
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>

            {/* <Spline scene="https://prod.spline.design/aYXoH9efXSs-k-71/scene.splinecode"/> */}
        </div>
    );
};

export default SplineBackground;