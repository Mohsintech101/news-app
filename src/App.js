import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  numNews = 10;
  apikey = process.env.NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.numNews}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.numNews}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.numNews}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.numNews}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.numNews}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.numNews}
                  country="us"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.numNews}
                  country="us"
                  category="sports"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
