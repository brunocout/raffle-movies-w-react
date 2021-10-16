import React from "react";

import "./App.css"
import AddFilm from "./components/AddFilm";


const App = () => {
    
    return ( 
        <>
            <div className="container">
                <AddFilm />
                
                <div className="draw-list">
                     
                </div>
            </div>
        </>
     );
}
 
export default App;