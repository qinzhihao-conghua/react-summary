import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import CommentDoc from '../comment-doc';
import './base.css';

export default class Base extends Component {
  render() {
    return (
      <section className="main-block">
        <aside className="side-bar">
          <ul className="nav">
            <li className="nav-item">
              <NavLink activeClassName="active" to="/base/doc">基础知识</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/base/route">路由</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/base/communication">组件间通讯</NavLink>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <Route path='/base/doc' component={CommentDoc}></Route>
          <Route path='/base/route' component={CommentDoc}></Route>
          <Route path='/base/communication' component={CommentDoc}></Route>
        </main>
      </section>
    )
  }
}
