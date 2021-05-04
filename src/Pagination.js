import React, { PureComponent } from "react";
import "./Pagination.css";

export default class Pagination extends PureComponent {
  addPagination = () => {
    let allPages = [];
    let pagination = [];
    for (let i = 1; i <= this.props.searchResults.total_pages; i++) {
      allPages.push(<span className={this.props.searchPage === i ? "pagination__btn-page pagination__btn--active" : "pagination__btn-page"} onClick={(e) => { this.props.setPage(i) }} key={i}>{i}</span>);
    }

    if(this.props.searchResults.total_pages <= 5)  {
      return allPages
    } else {
      if (this.props.searchPage <= this.props.searchResults.total_pages - 5) {
        pagination = [allPages.slice((this.props.searchPage - 1), this.props.searchPage + 4),"...",allPages[this.props.searchResults.total_pages - 1]];
      } else {
         pagination = [allPages.slice((this.props.searchPage - 1), this.props.searchPage + 4)];
      }
      return pagination
    }
  }

render() {
  return (
    <div className="pagination">
      {this.props.searchPage !== 1 ? <span className="pagination__btn-prev" onClick={(e) => { this.props.prevPage() }}>&#8249;</span> : null}
      {this.addPagination()}
      {this.props.searchPage !== this.props.searchResults.total_pages ? <span className="pagination__btn-next" onClick={(e) => { this.props.nextPage() }}>&#8250;</span> : null}
    </div>
  );
}
}