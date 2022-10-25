import AppHeader from "../appHeader/AppHeader";
import AppRoutes from "../../Routes/appRoutes";

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <AppRoutes />
        </div>
    )
}

export default App;