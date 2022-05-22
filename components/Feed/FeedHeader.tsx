export default function FeedHeader() {
  return (
    <header className="feed-head">
      <div className="feed-user">
        <picture className="profile-photo">
          <img src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        </picture>
        <div className="feed-user-info">
          <h3 className="feed-username">Lana Rose</h3>
          <small className="feed-user-location">
            Programación, hace 15 min
          </small>
        </div>
      </div>
      <span className="feed-edit feed-interaction-button">
        <i className="uil uil-ellipsis-h"></i>
      </span>
    </header>
  );
}
