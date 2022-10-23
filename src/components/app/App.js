import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import decoration from '../../resources/img/vision.png';
import CharParent from "../CharParent/CharParent";

const App = () => {

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
               
                    <div className="char__content">
                    <CharParent />
                    </div>
                
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App;