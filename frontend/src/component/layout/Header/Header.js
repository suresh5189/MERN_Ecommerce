import React from "react";
import { ReactNavbar } from "overlay-navbar";
import  logo  from "../../../images/skull.png";
import {FaUser} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaCartArrowDown} from "react-icons/fa";

function Header() {
  return (
    <ReactNavbar
      burgerColor = "#F4A950"
      burgerColorHover="#000fff"
      logo={logo}
      logoWidth="10vmax"
      navColor1="#ffffff"
      logoHoverSize="10px"
      logoHoverColor="black"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="2vmax"
      link1Color="#000000"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1.2vmax"
      profileIconUrl="/login"
      profileIconColor="#000000"
      searchIconColor="#000000"
      cartIconColor="#000000"
      profileIconColorHover="#D45757"
      searchIconColorHover="#D45757"
      cartIconColorHover="#D45757"
      profileIcon = {true}
      searchIcon = {true}
      cartIcon = {true}
      searchIconMargin ="1.4vmax"
      profileIconMargin ="1.4vmax"
      cartIconMargin ="1.4vmax"
      ProfileIconElement = {FaUser}
      SearchIconElement = {FaSearch}
      CartIconElement = {FaCartArrowDown}
    />
  );
}

export default Header;



// profileIcon = {true}
//       searchIcon = {true}
//       cartIcon = {true}
//       searchIconMargin ="1.4vmax"
//       profileIconMargin ="1.4vmax"
//       cartIconMargin ="1.4vmax"
//       ProfileIconElement = {FaUser}
//       SearchIconElement = {FaSearch}
//       CartIconElement = {FaCartArrowDown}