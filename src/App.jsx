import './App.css'
import Latest from './Pages/Latest'
import About from './Pages/About';
import Home from './Pages/Home';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/latest' element={<Latest />}/>
      </Routes>
    </Router>
  )
}

export default App
