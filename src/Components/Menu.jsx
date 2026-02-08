import MenuItem from "./MenuItem";

function Menu({ menuItems }) {
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        return (
          <MenuItem
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            img={item.img}
            desc={item.desc}
          />
        );
      })}
    </div>
  );
}

export default Menu;
