import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Resources from './pages/Resources'
import MegaIdeaHack from './pages/MegaIdeaHack'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
