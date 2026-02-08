function Categories({ cats, filterCategory }) {
  return (
    <div className="btn-container">
      {cats.map((cat, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn"
            onClick={() => filterCategory(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
