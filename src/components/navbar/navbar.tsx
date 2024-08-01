import React from "react";
import Contacts from "./contact";
import { RootState } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapse } from "../../redux/CollapseSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const isCollapsed = useSelector((state: RootState) => state.collapse.isCollapsed)

  const handleToggle = (): void => {
    dispatch(toggleCollapse())
  }

  return (
    <div className={`contacts ${isCollapsed? 'collapsed' : ''}`}>
      <Contacts />
      <button className="unravel" onClick={handleToggle}>
        {isCollapsed ? '»' : '«'}
      </button>
    </div>
  );
};

export default Navbar;