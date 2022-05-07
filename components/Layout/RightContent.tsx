export default function RightContent() {
  return (
    <>
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
    </>
  );
}
