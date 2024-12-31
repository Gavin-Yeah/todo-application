import React from "react";
import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
