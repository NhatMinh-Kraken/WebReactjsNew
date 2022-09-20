import NavMenuItems from "./NavMenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const DropdownClass = depthLevel > 1 ? "Dropdown-Submenu" : "";
  return (
    <div className={`dropdown${DropdownClass} ${dropdown ? "show" : ""}`}>
      <div className="menu">
        {submenus.map((submenu, index) => {
          <div className="menu-item">
            <NavMenuItems items={submenu} key={index} depthLevel={depthLevel} />
          </div>
        })}
      </div>
    </div>
  );
};

export default Dropdown;
