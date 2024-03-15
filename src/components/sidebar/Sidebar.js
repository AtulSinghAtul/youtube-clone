import React from "react";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import "./_sidebar.scss";

const Sidebar = ({ toggleSidebar, handleToggleSidebar }) => {
  console.log(toggleSidebar);
  return (
    <nav className={toggleSidebar ? "sidebar open" : "sidebar"}>
      <li onClick={() => handleToggleSidebar(false)}>
        <span>
          {" "}
          <MdHome size={23} />
        </span>

        <span>Home</span>
      </li>
      <li>
        <span>
          <MdSubscriptions size={23} />
        </span>

        <span>Subscriptions</span>
      </li>
      <li>
        <span>
          <MdThumbUp size={23} />
        </span>

        <span>Liked Video</span>
      </li>

      <li>
        <span>
          {" "}
          <MdHistory size={23} />
        </span>

        <span>History</span>
      </li>

      <li>
        <span>
          {" "}
          <MdLibraryBooks size={23} />
        </span>

        <span>Library</span>
      </li>
      <li>
        <span>
          <MdSentimentDissatisfied size={23} />
        </span>

        <span>I don't Know</span>
      </li>
      <hr className="bg-[#4c4c4c]" />
      <li>
        <span>
          <MdExitToApp size={23} />
        </span>
        <span>Log Out</span>
      </li>
      <hr />
      {/* </div> */}
    </nav>
  );
};

export default Sidebar;
