import { useState } from "react";
import Title from "./Components/Title";
import menu from "./data";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  // Get the unqiue categories
  const uniqueCats = new Set();
  const categories = [];
  // Add the "add" category
  uniqueCats.add("all");
  menuItems.forEach((item) => {
    uniqueCats.add(item.category);
  });
  // Add all the unique categories into the categories array
  uniqueCats.forEach((cat) => {
    categories.push(cat);
  });

  // Filter Function: Filters the menuItems based on items with the same category
  function filterCategory(category) {
    if (category !== "all") {
      // We do not use menuItems state value, because it changes.
      // So we use the original data to filter out the categories
      const newMenu = menu.filter((item) => {
        return item.category === category;
      });
      setMenuItems(newMenu);
    } else {
      setMenuItems(menu);
    }
  }

  const [cats, setCats] = useState(categories);

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories cats={cats} filterCategory={filterCategory} />
        <Menu menuItems={menuItems}></Menu>
      </section>
    </main>
  );
};
export default App;
