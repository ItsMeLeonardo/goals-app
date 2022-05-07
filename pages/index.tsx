import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <div className="container">
        <section className="left">
          <a href="" className="profile-link">
            <picture className="profile-photo">
              <img
                src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile 1"
              />
            </picture>
            <div className="handle">
              <h4>Diana Doe</h4>
              <p className="text-muted text-sm">@Diana</p>
            </div>
          </a>

          <aside className="sidebar">
            <a className="menu-item active">
              <span className="menu-item-icon">
                <i className="uil uil-home"></i>
              </span>
              <h3 className="menu-item-text">Home</h3>
            </a>
            <a className="menu-item">
              <span className="menu-item-icon">
                <i className="uil uil-compass"></i>
              </span>
              <h3 className="menu-item-text">Explore</h3>
            </a>
            <a className="menu-item" id="notifications">
              <span className="menu-item-icon">
                <i className="uil uil-bell">
                  <small className="notification-count">6</small>
                </i>
              </span>
              <h3 className="menu-item-text">Notifications</h3>
              <ul className="menu-item-popup">
                <li className="popup-item">
                  <picture className="profile-photo">
                    <img src="./images/profile-2.jpg" />
                  </picture>
                  <div className="popup-item-body">
                    <p>
                      <strong>John Doe</strong> Accepted your friend request
                    </p>
                    <small className="text-muted">2 Days Ago</small>
                  </div>
                </li>
                <li className="popup-item">
                  <picture className="profile-photo">
                    <img src="./images/profile-3.jpg" />
                  </picture>
                  <div className="popup-item-body">
                    <p>
                      <strong>Anna Doe</strong>
                      Commented your post
                    </p>
                    <small className="text-muted">2 Days Ago</small>
                  </div>
                </li>
                <li className="popup-item">
                  <picture className="profile-photo">
                    <img src="./images/profile-4.jpg" />
                  </picture>
                  <div className="popup-item-body">
                    <p>
                      <strong>John Doe</strong>
                      Liked your post
                    </p>
                    <small className="text-muted">2 Days Ago</small>
                  </div>
                </li>
              </ul>
            </a>
            <a className="menu-item" id="message-notification">
              <span className="menu-item-icon">
                <i className="uil uil-envelope-alt">
                  <small className="notification-count">6</small>
                </i>
              </span>
              <h3 className="menu-item-text">Message</h3>
            </a>
            <a className="menu-item">
              <span className="menu-item-icon">
                <i className="uil uil-bookmark"></i>
              </span>
              <h3 className="menu-item-text">Bookmarks</h3>
            </a>
            <a className="menu-item">
              <span className="menu-item-icon">
                <i className="uil uil-chart-line"></i>
              </span>
              <h3 className="menu-item-text">Analytics</h3>
            </a>

            <a className="menu-item">
              <span className="menu-item-icon">
                <i className="uil uil-setting"></i>
              </span>
              <h3 className="menu-item-text">Setting</h3>
            </a>
          </aside>
        </section>

        <section className="middle">
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
        </section>

        <section className="right">
          <aside className="messages-container">
            <header className="messages-head">
              <h3 className="message-title">Messages</h3>
            </header>
            <label className="messages-search-bar search-bar">
              <i className="uil uil-search"></i>
              <input
                type="search"
                name="search"
                id="search-messages"
                placeholder="Search"
              />
            </label>
            <div className="messages-category">
              <h6 className="message-category-text active">Primary</h6>
              <h6 className="message-category-text">General</h6>
              <h6 className="message-category-text">Request (2)</h6>
            </div>

            <ul className="messages-list">
              <li className="message isActive">
                <picture className="profile-photo">
                  <img src="https://images.unsplash.com/photo-1651663603223-a8168bcb0ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                </picture>
                <div className="message-body">
                  <h5 className="message-username">Edem Rose</h5>
                  <p className="message-text text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </li>
            </ul>
          </aside>

          <div className="friend-request-container">
            <h4 className="friends-request-title">Request</h4>

            <div className="friend-request">
              <div className="friend-request-info">
                <picture className="profile-photo">
                  <img src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                </picture>
                <div className="friend-request-info-body">
                  <h5 className="friend-request-username">Marko Rose</h5>
                  <p className="text-muted friend-request-data-text">
                    8 mutual friends
                  </p>
                </div>
              </div>
              <div className="friend-request-action">
                <button className="btn primary">Accept</button>
                <button className="btn">Decline</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
