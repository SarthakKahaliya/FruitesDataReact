import React from "react";
import "./search-box.styles.css";

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         value={this.props.searchField}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

const SearchBox = (props) => {
  const { className, placeholder, searchField, onChangeHandler } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      value={searchField}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
