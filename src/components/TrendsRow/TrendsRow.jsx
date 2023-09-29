import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./TrendsRow.css";

export default function TrendsSection(props) {
  return (
    <div className="trend">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{props.type}.Trending</p>
        <FontAwesomeIcon
          className="icon"
          icon={faEllipsis}
          style={{ color: `var(--paragraphsColor)`, cursor: "pointer" }}
        />
      </div>
      <p className="name">{props.name}</p>
      <p>{props.posts} Posts</p>
    </div>
  );
}
