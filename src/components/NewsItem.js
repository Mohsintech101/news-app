import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, category } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            title={title}
          />
          <span className="spanStyle" style={{ backgroundColor: "#2859a3" }}>  {/* #0a406a   #2859a3 orange-#ff8300 green -#a2d45eb3 */}
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
          </span>
          {/* #0a406ab3 */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span
              className="post-author"
              style={{ color: "#54565a", fontWeight: 400 }}
            >
              {author ? "By " + author : author} -{" "}
              {new Date(date).toGMTString()}
            </span>
            <p className="card-text" style={{ color: "#54565a" }}>
              {description.length < 200 ? description : description + "..."}
            </p>
            <div className="newsLinkMargin">
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="newsLink" //btn btn-sm btn-primary
                style={{}}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
