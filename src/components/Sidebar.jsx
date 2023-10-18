import React from "react";
import {
  BsFillHouseFill,
  BsXbox,
  BsPerson,
  BsPersonVideo3,
  BsPersonPlus,
  BsPersonVcard,
  BsArrowDownCircle,
  BsCalendarDate,
  BsCreditCard,
  BsBriefcase,
  BsStack,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsXbox className="icon_header" />
          ADMIN TEST
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsFillHouseFill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPersonVideo3 className="icon" /> Admin Home
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPerson className="icon" /> Admin Users
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPersonPlus className="icon" /> My Account
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPersonVcard className="icon" /> Member Lists
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsArrowDownCircle className="icon" /> Download
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCalendarDate className="icon" />
            Scheduling
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCreditCard className="icon" />
            Cards
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsBriefcase className="icon" />
            Jobs
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsStack className="icon" />
            Pages
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
