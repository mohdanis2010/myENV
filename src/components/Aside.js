import React, { Component } from 'react';

export default class Aside extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li className="active">
              <a href="#">
               item 1
              </a>
              <a href="#">
               item 2
              </a>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
