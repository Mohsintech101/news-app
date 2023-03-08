import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  //constructor - always call super first
  constructor() {
    super();
    this.state = {
      articles: [], //initially articles are empty
      loading: false,
      error: false,
      page: 1,
    };
  }

  //fetching top-headlines data and setting to the setState
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3929f9e4099f4baa914789f2c8251504&page=${this.state.page}&pagesize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  //defualt Image Path
  defaultImage =
    "https://media.cnn.com/api/v1/images/stellar/prod/230306110839-worm-moon-2022-file-restricted.jpg?c=16x9&q=w_800,c_fill";

  handlePrevBtn = async () => {
    console.log("prev btn");
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3929f9e4099f4baa914789f2c8251504&page=${this.state.page - 1}&pagesize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  handleNextBtn = async () => {
    console.log("next btn");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/10))
    {

    }
    else{
      let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3929f9e4099f4baa914789f2c8251504&page=${this.state.page + 1}&pagesize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 style={{ color: "#0a406a" }}>
            News Hunger - Top Headlines of the Day
          </h2>
          <div className="row">
            {this.state.articles.map((news) => (
              <div className="col-md-4" key={news.url}>
                <NewsItem
                  title={news.title}
                  description={
                    news.description ? news.description.slice(0, 500) : ""
                  }
                  imageUrl={
                    news.urlToImage ? news.urlToImage : this.defaultImage
                  }
                  newsUrl={news.url}
                  author={news.author}
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn pagebtn"
              onClick={this.handlePrevBtn}
              disabled={this.state.page<=1}
            >
              <span className="pagefont">&larr;</span> Previous
            </button>
            <button
              type="button"
              className="btn pagebtn"
              onClick={this.handleNextBtn}
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/10)}
            >
              Next <span className="pagefont">&rarr;</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
