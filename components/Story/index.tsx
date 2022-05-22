import type { StoryProps } from "components/Story/type";

export default function Story({
  username,
  project_poster,
  profile,
}: StoryProps) {
  return (
    <li className="story" style={{ backgroundImage: `url(${project_poster})` }}>
      <picture className="profile-photo">
        <img src={profile} />
      </picture>
      <p className="story-name">{username}</p>
    </li>
  );
}
