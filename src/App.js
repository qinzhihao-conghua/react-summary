import './App.css';
import { NavLink, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>react知识点总结</div>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/demo">demo</NavLink>
          </li>
        </ul>
      </header>
      <section>
        <aside>
          <li>基础知识</li>
        </aside>
        <main>
          <Route path=''></Route>
        </main>
      </section>
    </div>
  );
}

export default App;
