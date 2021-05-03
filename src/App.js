import "./stylesheets/index.scss";
import DropdownLink from "./components/DropdownLink/DropdownLink";
import Dropdown from "./components/Dropdown/Dropdown";
import { connect } from "react-redux";
import { useEffect } from "react";
import { toggleDropdownAction } from "./store/actions/toggleDropdownAction";

const App = ({ showDropdown, hideDropdown }) => {
  const checkIfOutside = (event) => {
    let clickedElement = event.target;

    while (clickedElement) {
      let navLinkOrDropDownClicked =
        clickedElement.classList.contains("nav__list") ||
        clickedElement.classList.contains("nav__link");
      if (navLinkOrDropDownClicked) {
        return false;
      }
      clickedElement = clickedElement.parentElement;
    }
    return true;
  };
  useEffect(() => {
    const onClick = (mouseEvent) => {
      if (checkIfOutside(mouseEvent)) {
        hideDropdown();
      }
    };
    window.addEventListener("click", (e) => onClick(e));
    return () => {
      window.removeEventListener("resize", onClick, null);
    };
  }, [hideDropdown]);
  return (
    <div>
      <nav className="nav">
        <DropdownLink />
        {showDropdown && <Dropdown />}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showDropdown: state.dropdown.showDropdown,
});

const mapDispatchToProps = (dispatch) => ({
  hideDropdown: () => dispatch(toggleDropdownAction(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
