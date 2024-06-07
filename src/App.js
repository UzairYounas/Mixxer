import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/Style.css'

import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Essential from './pages/Essential';
import Explore from './pages/Explore';
import Discover from './pages/Discover';
import Started from './pages/Started';
import FAQ from './pages/FAQ';


function App() {
  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      <Home />
      <About />
      <Essential />
      <Explore />
      <Discover />
      <Started />
      {/* <FAQ /> */}
    </div>
  );
}

export default App;
