export default function FeedInteractions() {
  return (
    <div className="feed-interactions">
      <div className="feed-interactions-buttons">
        <span className="feed-interaction-button">
          <i className="uil uil-heart"></i>
        </span>
        <span className="feed-interaction-button">
          <i className="uil uil-comment-dots"></i>
        </span>
        <span className="feed-interaction-button">
          <i className="uil uil-share-alt"></i>
        </span>
      </div>
      <div className="feed-bookmark">
        <span className="feed-interaction-button">
          <i className="uil uil-bookmark"></i>
        </span>
      </div>
    </div>
  );
}
