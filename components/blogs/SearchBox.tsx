"use client"
const SearchBox = () => {
  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">Search Objects</h3>
        </div>
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Search your keyword..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
