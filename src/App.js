import React from 'react';
import './App.css';
import ArticleOne from './ArticleOne';
import ArticleTwo from './ArticleTwo';
import ArticleThree from './ArticleThree';
import ArticleFour from './ArticleFour'
import NewClock from './Clock.js';
import GraphOne from './GraphOne.js'
import GraphTwo from './GraphTwo';
import GraphThree from './GraphThree';
import LineChart from './LineChart.js'
import NotePad from './Notepad.js';
import logo from './logo.png'
import home from './home.png'
import user from './user.png'
import GraphFour from './GraphFour';

function App() {
  return (
    <div className="App">
       <div id="wrapper">

      <div id="sidebar-wrapper">
        <div className="logo">
          <a href="#"><img class="logo" src={logo}></img></a>
        </div>
        <ul>
          <li className="home">
            <a href="#"><i class="home"><img src={home}></img></i></a>
          </li>
          <li className='account'>
          <a href="#"><i class="account"><img src={user}></img></i></a>
          </li>
          
        </ul>
      </div>

      <div id="page-content-wrapper">
        <div class="row">
          <div class="card card1">
            <GraphOne className='graphOne'/>
            <GraphTwo className='graphTwo' />
            <GraphThree />
            <GraphFour />
          </div>
          <div class="card card2">
          <div class="fact-one">
          <div className="article-two">
            <a href="https://www.everydayhealth.com/columns/health-answers/the-mysteries-of-testosterone/"><h2 className='percents'>67%</h2></a>
            <p>of girls have missed out on school due to lack ofperiod products.</p>
        </div>
            </div>
            <div class="fact-two">
            <div className="article-two">
            <a href="https://www.everydayhealth.com/columns/health-answers/the-mysteries-of-testosterone/"><h2 className='percents'>31%</h2></a>
            <p>of women wished they understood how their reproductive system works.</p>
        </div>
            </div>
            <NotePad />
          </div>
        </div>
        <div class="row row2">
          <div class="card card3">
            <div class="part1">
              <ArticleOne />
            </div>
            <div class="part2">
              <ArticleTwo />
            </div>
            <div class="part3">
              <ArticleThree />
            </div>
            <div class="part4">
            <ArticleFour />
            </div>
          </div>
          <div class="card card4">
            <h3 className='graph-header'> Level of agreement with aspects of health literacy for young people aged 18 to 24. </h3>
          <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
