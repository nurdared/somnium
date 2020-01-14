import React from 'react';

const SearchBar = ({ searchBook }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control border-dark"
        placeholder="Search Book"
        name="searchString"
        onChange={searchBook}
      />
      <div className="input-group-append">
        <button type="submit" className="btn btn-dark btn-number">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
