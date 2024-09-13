import React from 'react';
import { useSite } from 'chayns-api';

import Header from './Header/Header';
import Newsfeed from './Newsfeed/Newsfeed'


const App = () => {
    const { title } = useSite();
    return(
        <div>
            <Header/>
            <Newsfeed/>
        </div>

    ) 
};

export default App;
