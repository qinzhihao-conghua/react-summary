import './app.scss';
import { NavLink, Route } from 'react-router-dom';
import Base from './pages/base';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div>react知识点总结</div>
        <ul>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/base">base</NavLink>
          </li>
        </ul>
      </header>
      <Route path="/base" component={Base}></Route>
    </div>
  );
}

export default App;
