import React, { Component } from "react";
import _ from "lodash";
import PropType from "prop-types";

class Pagination extends Component {
  state = {};
  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemsCount: PropType.number.isRequired,
  pageSize: PropType.number.isRequired,
  onPageChange: PropType.func.isRequired,
  currentPage: PropType.number.isRequired,
};
export default Pagination;
