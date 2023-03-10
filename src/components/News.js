import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from "uuid";

export default function News({
  pageSize,
  country,
  category,
  apiKey,
  setProgress,
}) {
  //Setting Initail State Values
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  //Adding PropTypes
  News.defaultProps = {
    pageSize: 10,
    country: "us",
    category: "general",
  };

  News.propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  //Capitalize Case
  const capitalizeCase = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  };

  //Update News from a single function
  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`;
    setProgress(30);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  //fetching top-headlines data and setting to the setState
  useEffect(() => {
    document.title = `${capitalizeCase(category)} - News Hunger`;
    updateNews();
  }, []);

  //defualt Image Path
  const defaultImage =
    "https://media.cnn.com/api/v1/images/stellar/prod/230306110839-worm-moon-2022-file-restricted.jpg?c=16x9&q=w_800,c_fill";

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pagesize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className="text-center my-4" style={{ color: "#0a406a" }}>
        News Hunger - Top {capitalizeCase(category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((news) => (
              <div className="col-md-6" key={uuidv4()}>
                <NewsItem
                  title={news.title}
                  description={
                    news.description ? news.description.slice(0, 200) : ""
                  }
                  imageUrl={news.urlToImage ? news.urlToImage : defaultImage}
                  newsUrl={news.url}
                  author={news.author}
                  date={news.publishedAt}
                  category={category}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
