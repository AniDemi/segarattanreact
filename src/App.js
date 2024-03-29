//Pages
import Home from "./pages/Home";
import Sortiment from "./pages/Sortiment";
import Omoss from "./pages/Omoss";
import Leverantor from "./pages/Leverantor";
import Hitta from "./pages/Hitta";

//Components
import Header from "./components/Header";

import './styles/App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path ="segarattanreact/" element={<Home/>}/>
        <Route exact path ="segarattanreact/sortiment" element={<Sortiment/>}/>
        <Route exact path ="segarattanreact/omoss" element={<Omoss/>}/>
        <Route exact path ="segarattanreact/leverantor" element={<Leverantor/>}/>
        <Route exact path ="segarattanreact/hitta" element={<Hitta/>}/>
      </Routes>
    </Router>
  );
}

export default App;
