import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import './index.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Events" element={<Events />} />
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
