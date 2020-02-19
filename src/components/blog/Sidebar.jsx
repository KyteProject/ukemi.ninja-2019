import React from "react";

import About from "../widget/About";
import Featured from "../widget/Featured";
import Tags from "../widget/Tags";

const Sidebar = () => {
  return (
    <aside className="col-lg-4 sidebar">
      <About />
      <Featured />
      <Tags />
    </aside>
  );
};

export default Sidebar;
