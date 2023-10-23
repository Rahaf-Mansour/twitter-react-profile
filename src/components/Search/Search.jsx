import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <FontAwesomeIcon className="search-magnifier" icon={faMagnifyingGlass} />
      <input type="search" placeholder="Search" />
    </div>
  );
}
