import Avatar from "components/Avatar";

type Props = {
  username: string;
  avatar: string;
};

export default function FeedHeader({ username, avatar }: Props) {
  return (
    <header className="feed-head">
      <div className="feed-user">
        <picture className="profile-photo">
          <Avatar src={avatar} alt={username} />
        </picture>
        <div className="feed-user-info">
          <h3 className="feed-username">{username}</h3>
          {/* <small className="feed-user-location">
            Programación, hace 15 min
          </small> */}
        </div>
      </div>
      <span className="feed-edit feed-interaction-button">
        <i className="uil uil-ellipsis-h"></i>
      </span>
    </header>
  );
}
