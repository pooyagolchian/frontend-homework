import "./stylesheets/index.scss";

import DropdownLink from "./components/DropdownLink/DropdownLink";
import DropdownItem from "./components/DropdownItem/DropdownItem";

const App = () => (
  <div>
    <nav className="nav">
      <DropdownLink />
      <DropdownItem />
    </nav>
  </div>
);

export default App;
