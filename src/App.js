import React from 'react';
import './App.css';
import Articles from './Articles';
import NewClock from './Clock.js';
import Graph from './Graphs.js'

function App() {
  return (
    <div className="App">
       <div id="wrapper">

      <div id="sidebar-wrapper">
        <div class="logo">
          <a href="#"><img class="logo" src="https://i.imgur.com/FC4H30d.png"></img></a>
        </div>
        <ul>
          <li class="active_link">
            <a href="#"><i class="fas fa-tint"></i>Account</a>
          </li>
          <li>
            <a href="#"><i class="fab fa-angellist"></i>Dashboard</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-archway"></i>Something Else</a>
          </li>
          
        </ul>
      </div>

      <div id="page-content-wrapper">
        <div class="row">
          <div class="card card1">
            <Graph />
            <div class="card1_title_wrapper">
            </div>
            <div class="card1_table_wrapper">
            </div>
          </div>
          <div class="card card2">
            <NewClock />
              </div>
        </div>
        <div class="row row2">
          <div class="card card3">
            <Articles />
          </div>
          <div class="card card4">
            <div class="card1_title_wrapper">
              
            </div>
            <div class="card1_table_wrapper">
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
