import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import PostDetails from "../PostDetails/PostDetails";
import "./Post.css";

export default function Post(props) {
  return (
    <div className="post">
      {props.pinned && (
        <p className="grey mini-font post-mini-detail">
          <FontAwesomeIcon icon={faThumbTack} />
          &nbsp;pinned
        </p>
      )}
      {props.reposted && (
        <p className="grey post-mini-detail">
          <FontAwesomeIcon icon={faRetweet} />
          &nbsp;reposted
        </p>
      )}
      <div className="post-flexbox">
        <div className="profile-pic-div">
          <img className="profile-pic" src={props.profilePic} alt="" />
        </div>
        <div className="post-content">
          <h4>{props.publisher}</h4>
          <p className="grey">
            {props.handel} . {props.date}
          </p>
          <p>{props.content}</p>
        </div>
      </div>
      <PostDetails {...props.details} />
    </div>
  );
}
