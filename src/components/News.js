import React, { Component } from "react";
import { Spinner } from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  //Adding PropTypes
  static defaultProps = {
    pageSize: 10,
    country: "us",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  //constructor - always call super first
  constructor(props) {
    super(props);
    this.state = {
      articles: [], //initially articles are empty
      loading: false,
      error: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeCase(
      this.props.category
    )} - News Hunger`;
  }

  //Capitalize Case
  capitalizeCase = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  };

  //Update News from a single function
  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.props.setProgress(30)
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  //fetching top-headlines data and setting to the setState
  async componentDidMount() {
    /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }); */
    this.updateNews();
  }

  //defualt Image Path
  defaultImage =
    "https://media.cnn.com/api/v1/images/stellar/prod/230306110839-worm-moon-2022-file-restricted.jpg?c=16x9&q=w_800,c_fill";

  //Previous fetch
  handlePrevBtn = async () => {
    /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    }); */

    /* this.setState({
      page: this.state.page - 1,
    });
    this.updateNews(); */
  };

  //Next fetch
  handleNextBtn = async () => {
    /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    }); */
    /* this.setState({
      page: this.state.page + 1,
    });
    this.updateNews(); */
  };

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3929f9e4099f4baa914789f2c8251504&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center my-4" style={{ color: "#0a406a" }}>
          News Hunger - Top {this.capitalizeCase(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ <Spinner /> } 
        >
          <div className="container my-3">
            <div className="row">
              {/* !this.state.loading && */
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
                      date={news.publishedAt}
                      category={this.props.category}
                    />
                  </div>
                ))}
            </div>

            {/* {!this.state.loading && (
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
          )} */}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
