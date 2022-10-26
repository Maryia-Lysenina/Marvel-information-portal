import AppHeader from "../appHeader/AppHeader";
import AppRoutes from "../../Routes/appRoutes";
import Characters from '../../Pages/Characters/Characters';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <AppRoutes />
        </div>
    )
}

export default App;