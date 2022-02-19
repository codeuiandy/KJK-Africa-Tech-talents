import React from "react";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="app-sidebarWrap">
      <div className="appLogo">LOGO</div>

      <ul className="sidebarList">
        <li>LINKS</li>
      </ul>
    </div>
  );
}
