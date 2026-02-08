import { useState } from "react";
import Title from "./Components/Title";
import menu from "./data";
import Menu from "./Components/Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <section className="menu">
        <Title />
        <Menu menuItems={menuItems}></Menu>
      </section>
    </main>
  );
};
export default App;
