import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLink } from "@fortawesome/free-solid-svg-icons";
import "./ProfileDetails.css";

export default function ProfileDetails() {
  return (
    <div className="profile-details">
      <h3>React</h3>
      <p className="handle">@reactjs</p>
      <br />
      <p className="description">
        The library for web and native user interfaces
      </p>
      <div className="links">
        <FontAwesomeIcon className="grey" icon={faLink} />
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          react.dev
        </a>
        <FontAwesomeIcon className="grey" icon={faCalendarDays} />
        <p className="joining-date-p grey">Joined July 2013</p>
        <br />
        <a
          className="follows-details"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/reactjs/following"
        >
          267 <span className="grey">Following</span>
        </a>
        <a
          className="follows-details"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/reactjs/verified_followers"
        >
          708.1K <span className="grey">Followers</span>
        </a>
      </div>
      <p className="follows-people grey">
        Not followed by anyone you’re following
      </p>
    </div>
  );
}
