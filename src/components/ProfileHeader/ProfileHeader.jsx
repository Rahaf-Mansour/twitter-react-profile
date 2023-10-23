import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProfileHeader.css";

export default function ProfileHeader(props) {
  return (
    <div className="page-header">
      <FontAwesomeIcon
        className="x-icon back-arrow"
        icon={faArrowLeft}
        size="lg"
      />

      <div className="bottom">
        <h3>{props.title}</h3>
        <p>{props.postsCount} posts</p>
      </div>
    </div>
  );
}
