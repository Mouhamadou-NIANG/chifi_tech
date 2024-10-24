import React from 'react';
import { Header } from '../../components'; 
import  SplineBackground  from '../../components/splineBack';

const HomePage: React.FC = () => {
    return (
        <div>
            <SplineBackground/>
            <Header />
            
        </div>
    );
};

export default HomePage;
