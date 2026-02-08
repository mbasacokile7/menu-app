function Categories({ cats }) {
  return (
    <div className="btn-container">
      {cats.map((cat, index) => {
        return (
          <button key={index} type="button" className="btn">
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
