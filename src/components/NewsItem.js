import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt={title} title={title} />
          <span className="spanStyle" style={{ backgroundColor: "#a2d45eb3" }}>
            Article
          </span>
          {/* #0a406ab3 */}
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                
              }}
            >
              {title}
            </h5>
            <span
              className="post-author"
              style={{ color: "#54565a", fontWeight: 600 }}
            >
              {author}
            </span>
            <p className="card-text" style={{ color: "#54565a" }}>
              {description.length < 500 ? description : description + "..." }
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
              style={{ backgroundColor: "rgba(255,131,0,1)", border: "none" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
