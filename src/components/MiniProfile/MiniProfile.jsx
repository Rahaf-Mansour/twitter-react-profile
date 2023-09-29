import FollowBtn from "../FollowBtn/FollowBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./MiniProfile.css";

export default function MiniProfile(props) {
  return (
    <div className="mini-profile">
      <img src={props.img} alt="" style={{ width: 40 }} />
      <div className="mini-profile-flex">
        <div className="title-and-handel">
          <p>
            {props.title}
            {props.verified ? (
              <FontAwesomeIcon icon={faCircleCheck} className="verified" />
            ) : null}
          </p>
          <p className="grey mini-text">{props.handel}</p>
        </div>
        <FollowBtn />
      </div>
    </div>
  );
}
