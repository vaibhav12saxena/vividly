import React, { Component } from "react";
class ListGroup extends Component {
  state = {};
  render() {
    const {
      genres: items,
      onItemSelect,
      textProperty,
      valueProperty,
      selectedItem,
    } = this.props;
    return (
      <ul className="list-group">
        {/* <li
          className="list-group-item"
          onClick={() => onItemSelect({ _id: null, name: "ALL Genre" })}
        >
          ALL Genre
        </li> */}
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
