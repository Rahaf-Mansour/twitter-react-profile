import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faChartSimple,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import "./PostDetails.css";

export default function PostDetails(props) {
  return (
    <div className="post-details">
      <span className="comment-btn">
        <FontAwesomeIcon icon={faComment} className="icon" />
        {props.commentCount}
      </span>
      <span className="retweet-btn">
        <FontAwesomeIcon icon={faRetweet} className="icon" />
        {props.retweetCount}
      </span>
      <span className="like-btn">
        <FontAwesomeIcon icon={faHeart} className="icon" />
        {props.likeCount}
      </span>
      <span className="view-btn">
        <FontAwesomeIcon icon={faChartSimple} className="icon" />
        {props.viewCount}
      </span>
      <span>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </span>
    </div>
  );
}
