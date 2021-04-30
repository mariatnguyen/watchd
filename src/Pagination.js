import React, { PureComponent } from "react";
import "./Pagination.css";

export default class Pagination extends PureComponent {  
  render() {
    let pages = [];
    for (let i = 1; i <= this.props.searchResults.total_pages; i++) {
      pages.push(<span onClick={(e)=>{this.props.setPage(i)}} key={i}>{i}</span>);
    }

    return (
        <div className="pagination">
          {pages}
        </div>
    );
  }
}