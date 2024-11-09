import React, { useEffect } from 'react';
import Routes from './routes';

const App = () => {
    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        // document.body.style.backgroundColor = '#222D41';
        document.body.style.backgroundColor = '#02072E';


        return () => {
            document.body.style.margin = '';
            document.body.style.padding = '';
            document.body.style.backgroundColor = '';
        };
    }, []);
    
    return (
        <div>
            <Routes />
        </div>
    );
};

export default App;
