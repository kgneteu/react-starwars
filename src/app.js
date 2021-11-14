import StarsParallaxUp from "./components/UI/starsParallaxUp/starsParallaxUp";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Heroes from "./components/Heroes/heroes";
import {Toasts} from "./components/UI/toasts";
import {Home} from "./components/home";

const App = () => {
    return (
        <>
            <StarsParallaxUp/>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home/>} exact/>
                    <Route path={'/heroes'} element={<Heroes/>}/>
                    <Route path={'/starships'} component={Heroes} />
                </Routes>
            </Router>
            <Toasts/>
        </>
    );
};

export default App;
