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
                <footer>
                    Feito com <span role="img" aria-label="Coração">❤️</span> por Bruno Coutinho. <br />
                    Dados por The Movie Database.
                </footer>
            </div>

        </>
     );
}
 
export default App;