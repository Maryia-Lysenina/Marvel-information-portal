import React from 'react';
import {Routes, Route} from "react-router-dom";
import Characters from '../Pages/Characters/Characters';
import Comics from '../Pages/Comics/Comics';

function AppRoutes() {
    return ( 
        <Routes>
            <Route path='/characters' element={<Characters />}/>
            <Route path='/comics' element={<Comics />}/>
        </Routes>
     );
}

export default AppRoutes;