import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Gifts from './components/Gifts';
import Home from './components/Home';
import Lingerie from './components/Lingerie';
import Sewing from './components/Sewing';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/gifts">
          <Gifts />
        </Route>
        <Route path="/lingerie">
          <Lingerie />
        </Route>
        <Route path="/sewing">
          <Sewing />
        </Route>
      </Switch>
  
      </div>
    </Router>
  );
}

export default App;
