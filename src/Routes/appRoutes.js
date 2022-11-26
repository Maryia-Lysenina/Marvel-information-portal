import React from 'react';
import {Routes, Route} from "react-router-dom";
import SingleComic from '../components/singleComic/SingleComic';
import Characters from '../Pages/Characters/Characters';
import Comics from '../Pages/Comics/Comics';

function AppRoutes() {
    return ( 
        <Routes>
            <Route path='/' element={<Characters />}/>
            <Route path='/characters' element={<Characters />}/>
            <Route path='/comics' element={<Comics />}/>
            <Route path='/comics/:id' element={<SingleComic />}/>
        </Routes>
     );
}

export default AppRoutes;