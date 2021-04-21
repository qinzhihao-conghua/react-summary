import './app.scss';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Base from './pages/base';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div>react知识点总结</div>
        <ul className="nav">
          <li className="nav-item">
            <NavLink activeClassName="app-active" to="/base">base</NavLink>
            <Redirect to="/base"></Redirect>
          </li>
        </ul>
      </header>
      <Route path="/base" component={Base}></Route>
    </div>
  );
}

export default App;
