import "./ProfileShowOptions.css";

const options = ["Posts", "Replies", "Media", "Likes"];

export default function ProfileShowOptions() {
  return (
    <div className="show-list">
      {options.map((item, index) => (
        <div className="list-item" key={`profile-show-option-${index}`}>
          <a id="item" href="#item">
            {item}
          </a>
        </div>
      ))}
    </div>
  );
}
