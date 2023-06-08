import "./App.css";
import GenreMovie from "./components/GenreMovie";
import Production from "./components/Production";
import Slider from "./components/Slider";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />

            <Slider />

            <Production />

            <GenreMovie />
        </>
    );
}

export default App;
