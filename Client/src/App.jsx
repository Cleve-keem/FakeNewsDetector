import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Predictor from './Components/Predictor/Predictor'
import './App.modulus.css'

function App() {
  
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route exact path='/' Component={Home}/>
              <Route exact path='/about' Component={About}/>
              <Route exact path='/predictor' Component={Predictor}/>
            </Routes>
          </div>
        </div>
      </Router>

    </>
  )
}

export default App
