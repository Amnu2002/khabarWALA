import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, newsUrl, imageUrl, author, date ,publisher } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imageUrl ? imageUrl : "https://pixy.org/src/477/4774988.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {publisher}
              <span className="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {author ? "By" : ""} {author ? author : ""} On{" "}
                {date ? date : "Not available"}
              </small>
            </p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
