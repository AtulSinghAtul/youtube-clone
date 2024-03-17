import React from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import "./_header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/firebase";
import { removeAuthData } from "../../utility/slices/authSlice";
import { PiUserCirclePlusLight, PiUserCircleMinusLight } from "react-icons/pi";

const Header = ({ handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((store) => store?.auth?.uid);
  console.log(authUser);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeAuthData());
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />
      <form className="flex grow-[0.6] p-[0.1rem] m-[0.1rem] rounded-md border-[1.2px] border-solid bg-[#121417] lg:flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full border-none font-[500] bg-transparent p-[0.3rem] text-[#b1bdb4]"
        />
        <button className="px-[1.25rem] text-[#b1bdb4] bg-transparent border-none focus:border-none">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />

        {authUser?.uid ? (
          <span className="login_btn" onClick={handleSignOut}>
            <PiUserCircleMinusLight />
            Logout
          </span>
        ) : (
          <Link to={"/login"}>
            <span className="login_btn">
              <PiUserCirclePlusLight />
              Login
            </span>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
