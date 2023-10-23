import { faEllipsis, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FollowBtn from "../FollowBtn/FollowBtn";
import "./ProfileActions.css";

export default function ProfileActions() {
  return (
    <div className="profile-actions">
      <FontAwesomeIcon icon={faEllipsis} className="more" />
      <FontAwesomeIcon icon={faBell} className="more" />
      <FollowBtn />
    </div>
  );
}
