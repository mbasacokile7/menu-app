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

  const [cats, setCats] = useState(categories);

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories cats={cats} />
        <Menu menuItems={menuItems}></Menu>
      </section>
    </main>
  );
};
export default App;
