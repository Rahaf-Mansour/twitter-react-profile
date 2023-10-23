import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { icons } from "../../data/SidebarIcons";
import SidebarRow from "../SidebarRow/SidebarRow";
import PostButton from "../PostButton/PostButton";
import UserProfile from "../UserProfile/UserProfile";
import { user } from "../../data/UserProfileData";
import userPhoto from "../../images/rahaf-profile-photo.jpg";
import "./SidebarMenu.css";

export default function SidebarMenu() {
  return (
    <div className="sidebar-left-content">
      <FontAwesomeIcon className="x-icon" icon={faXTwitter} size="2xl" />
      <ul className="sidebar-unordered-list">
        {icons.map((item, index) => (
          <SidebarRow
            key={`Sidebar-icon-${index}`}
            icon={item.icon}
            label={item.title}
          />
        ))}
      </ul>

      <PostButton />

      <div className="user-container">
        {user.map((item, index) => (
          <UserProfile
            key={`UserProfile-${index}`}
            // imgPath={item.imgPath} // Why it doesn't work?
            imgPath={userPhoto}
            name={item.name}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
}
