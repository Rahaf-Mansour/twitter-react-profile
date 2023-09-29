import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./UserProfile.css";

export default function UserProfile(props) {
  return (
    <div className="user">
      <img src={props.imgPath} alt="personal user profile" />
      <div className="user-info">
        <p className="user-name">{props.name}</p>
        <p className="user-email" title={props.email}>
          {props.email}
        </p>
      </div>
      <FontAwesomeIcon className="ellipsis" icon={faEllipsis} />
    </div>
  );
}
