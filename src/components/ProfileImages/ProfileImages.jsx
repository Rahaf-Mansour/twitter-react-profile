import "./ProfileImages.css";

export default function ProfileImages(props) {
  return (
    <div className="profile-images">
      <img
        className="background-img"
        src={props.bgImg}
        alt="profile background"
      />
      <img
        className="personal-profile-img"
        src={props.profileImg}
        alt="personal profile"
      />
    </div>
  );
}
