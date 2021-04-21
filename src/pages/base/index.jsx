import React, { Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom';
import CommentDoc from '../comment-doc';
import RouterExample from '../router-example';
import Communication from '../communication';
import './base.scss';

export default class Base extends Component {
  render() {
    return (
      <section className="main-block">
        <aside className="side-bar">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="base-active" to="/base/doc">基础知识</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="base-active" to="/base/route">路由</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="base-active" to="/base/communication">组件间通讯</NavLink>
              <Redirect to="/base/doc"></Redirect>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <Route path='/base/doc' component={CommentDoc}></Route>
          <Route path='/base/route' component={RouterExample}></Route>
          <Route path='/base/communication' component={Communication}></Route>
        </main>
      </section>
    )
  }
}
