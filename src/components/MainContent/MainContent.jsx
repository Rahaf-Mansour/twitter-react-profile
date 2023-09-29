import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileImages from "../ProfileImages/ProfileImages";
import ProfileActions from "../ProfileActions/ProfileActions";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileShowOptions from "../ProfileShowOptions/ProfileShowOptions";
import { posts } from "../../data/posts";
import Post from "../Post/Post";
import Search from "../Search/Search";
import { recProfiles } from "../../data/recommended-profiles";
import RecommendedProfilesBoard from "../RecommendedProfilesBoard/RecommendedProfilesBoard";
import MiniProfile from "../MiniProfile/MiniProfile";
import TrendsSection from "../TrendsSection/TrendsSection";
import ShowMore from "../ShowMore/ShowMore";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="main">
      <div className="left-part">
        <ProfileHeader title="React" postsCount="2,611" />
        <ProfileImages
          bgImg="https://pbs.twimg.com/profile_banners/1566463268/1470764371/1500x500"
          profileImg="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
        />
        <ProfileActions />
        <ProfileDetails />
        <ProfileShowOptions />
        {posts.map((post, index) => (
          <Post
            key={`post-${index}`}
            date={post.date}
            handel={post.publisherHandle}
            pinned={post.pinned}
            reposted={post.reposted}
            content={post.content}
            publisher={post.publisher}
            profilePic={post.profilePic}
            details={post.details}
          />
        ))}
      </div>
      <div className="right-part">
        <Search />
        <RecommendedProfilesBoard>
          <h3 style={{ fontSize: 19, margin: 10 }}>You might like</h3>
          {recProfiles.map((profile, index) => (
            <MiniProfile
              key={`mini-recommended-profile-${index}`}
              img={profile.img}
              handel={profile.handel}
              title={profile.title}
              verified={profile.verified}
            />
          ))}
          <ShowMore />
        </RecommendedProfilesBoard>
        <TrendsSection />
        <TermsAndConditions />
      </div>
    </div>
  );
}
