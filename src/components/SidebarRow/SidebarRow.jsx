import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidebarRow.css";

export default function SidebarRow(props) {
  return (
    <li className="row-item">
      <a className="row-item-label-style" href="#row-item">
        <FontAwesomeIcon className="font-icon" icon={props.icon} />
        {props.label}
      </a>
    </li>
  );
}
