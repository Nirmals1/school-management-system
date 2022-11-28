import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavMenu(props) {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
            : " flex px-3 my-5 items-center hover:text-red-500"
        }
        to={props.link}
        
        onClick={()=>setIsDrop(!isDrop)}
      >
        <i className={`${props.icon} px-2`}></i>
        {props.name}
      </NavLink>
      {
        isDrop? props.children : null
      }
    </>
  );
}

export default NavMenu;
