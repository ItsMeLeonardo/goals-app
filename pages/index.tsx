import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h3 className="subtitle">Messages</h3>
      <ul className="story-list">
        <li className="story">
          <picture className="profile-photo">
            <img src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </picture>
          <p className="story-name">Your history</p>
        </li>
        <li className="story">
          <picture className="profile-photo">
            <img src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </picture>
          <p className="story-name">Lilia james</p>
        </li>
        <li className="story">
          <picture className="profile-photo">
            <img src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </picture>
          <p className="story-name">John Mark</p>
        </li>
        <li className="story">
          <picture className="profile-photo">
            <img src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </picture>
          <p className="story-name">Anna Becker</p>
        </li>
      </ul>

      <form className="create-post-form">
        <picture className="profile-photo">
          <img src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </picture>
        <input
          type="text"
          placeholder="What's on your mind Diana?"
          id="create-post"
          className="create-post-input"
        />
        <button className="btn primary">Post</button>
      </form>

      <div className="feeds-container">
        <aside className="feed">
          <header className="feed-head">
            <div className="feed-user">
              <picture className="profile-photo">
                <img src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
              </picture>
              <div className="feed-user-info">
                <h3 className="feed-username">Lana Rose</h3>
                <small className="feed-user-location">
                  Dubai, 15 Minues ago
                </small>
              </div>
            </div>
            <span className="feed-edit feed-interaction-button">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </header>
          <div className="feed-body">
            <picture className="feed-photo">
              <img
                src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </picture>
          </div>
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
          <footer className="feed-footer">
            <div className="feed-likeBy">
              <picture className="likeBy-photo">
                <img
                  src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </picture>
              <picture className="likeBy-photo">
                <img
                  src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </picture>
              <picture className="likeBy-photo">
                <img
                  src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </picture>
              <p className="likeBy-text">
                Liked by <strong>Anna Doe</strong> and 250 others
              </p>
            </div>
            <div className="feed-caption">
              <p className="feed-caption-text">
                <strong>Lana Rose</strong>
                Lorem ipsum dolor sit.
                <span className="hash-tag">#lifestyle</span>
                <span className="hash-tag">#new_job</span>
              </p>
            </div>
            <div className="feed-comment-summary text-muted">
              View all 20 comments
            </div>
          </footer>
        </aside>
      </div>
    </>
  );
};

export default Home;
