import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  numNews = 10
  render() {
    return (
      <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={this.numNews} country="us" category="general" />} />
            <Route exact path='/business' element={<News key="business" pageSize={this.numNews} country="us" category="business" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.numNews} country="us" category="entertainment" />} />
            <Route exact path='/health' element={<News key="health" pageSize={this.numNews} country="us" category="health" />} />
            <Route exact path='/science' element={<News key="science" pageSize={this.numNews} country="us" category="science" />} />
            <Route exact path='/technology' element={<News key="technology" pageSize={this.numNews} country="us" category="technology" />} />
            <Route exact path='/sports' element={<News key="sports" pageSize={this.numNews} country="us" category="sports" />} />
          </Routes>
      </BrowserRouter>
      </div>
    );
  }
}