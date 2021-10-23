import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Gifts from './components/Gifts';
import Home from './components/Home';
import Lingerie from './components/Lingerie';
import Sewing from './components/Sewing';
import Submitted from './components/Submitted';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router basename="/complichic">
      <div className="App">
        <Nav/>
      <Switch>
        <Route exact path="/">
          <About />
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
        <Route path="/submitted">
          <Submitted />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
  
      </div>
    </Router>
  );
}

export default App;
