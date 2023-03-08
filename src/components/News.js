import React, { Component } from "react";
import { Spinner } from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export class News extends Component {

  //Adding PropTypes
  static defaultProps = {
    pageSize: 10,
    country: 'us',
    category: 'general'
  }

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  //defualt Image Path
  defaultImage =
    "https://media.cnn.com/api/v1/images/stellar/prod/230306110839-worm-moon-2022-file-restricted.jpg?c=16x9&q=w_800,c_fill";

  //Previous fetch  
  handlePrevBtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  //Next fetch
  handleNextBtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={{ color: "#0a406a" }}>
            News Hunger - Top Headlines of the Day
          </h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((news) => (
                <div className="col-md-6" key={news.url}>
                  <NewsItem
                    title={news.title}
                    description={
                      news.description ? news.description.slice(0, 200) : ""
                    }
                    imageUrl={
                      news.urlToImage ? news.urlToImage : this.defaultImage
                    }
                    newsUrl={news.url}
                    author={news.author}
                    category={this.props.category}
                  />
                </div>
              ))}
          </div>
          {!this.state.loading && (
            <div className="container d-flex justify-content-between">
              <button
                type="button"
                className="btn pagebtn"
                onClick={this.handlePrevBtn}
                disabled={this.state.page <= 1}
              >
                <span className="pagefont">&larr;</span> Previous
              </button>
              <button
                type="button"
                className="btn pagebtn"
                onClick={this.handleNextBtn}
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResults / 10)
                }
              >
                Next <span className="pagefont">&rarr;</span>
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default News;
