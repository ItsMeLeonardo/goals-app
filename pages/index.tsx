import type { NextPage } from "next";

const data = [
  {
    profile:
      "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    username: "Anna Abel",
    project: "Project 1",
    project_poster:
      "https://images.unsplash.com/photo-1583407723467-9b2d22504831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    username: "Gerogina Abel",
    project: "Project 2",
    project_poster:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    username: "Antonella Dabner",
    profile:
      "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    project: "Project 3",
    project_poster:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    username: "Valeria Dabner",
    profile:
      "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    project: "Project 4",
    project_poster:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    username: "Juan Dabner",
    profile:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    project: "Project 5",
    project_poster:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    username: "Antony Dabner",
    profile:
      "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    project: "Project 6",
    project_poster:
      "https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const tags = ["React", "Next.js", "TypeScript", "Node.js", "Express"];

const Home: NextPage = () => {
  return (
    <>
      <h3 className="subtitle">Post recientes ({data.length})</h3>
      <ul className="story-list">
        {data.map((story) => (
          <li
            key={story.username}
            className="story"
            style={{ backgroundImage: `url(${story.project_poster})` }}
          >
            <picture className="profile-photo">
              <img src={story.profile} />
            </picture>
            <p className="story-name">{story.username}</p>
          </li>
        ))}
      </ul>

      <form className="create-post-form">
        <picture className="profile-photo">
          <img src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </picture>
        <input
          type="text"
          placeholder="¿Qué tienes en mente ${username}?"
          id="create-post"
          className="create-post-input"
          autoComplete="off"
        />
        <button className="btn primary">Crear</button>
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
                  Programación, hace 15 min
                </small>
              </div>
            </div>
            <span className="feed-edit feed-interaction-button">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </header>

          <section className="feed-body">
            <picture className="feed-photo">
              <img
                src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </picture>
            {/* <div className="feed-photo-grid"></div> */}
          </section>
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
            <div className="feed-caption">
              <h3 className="feed-title">
                Aprende como crear una App con NextJS
              </h3>
            </div>

            <ul className="feed-tag-list">
              {tags.map((tag) => (
                <li className="feed-tag" key={tag}>
                  <span className="feed-tag-text">#{tag}</span>
                </li>
              ))}
            </ul>

            {/*             <div className="feed-likeBy">
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
                Leido por <strong>Anna Doe</strong> y 250 más
              </p>
            </div> */}

            {/* <div className="feed-comment-summary text-muted">
              View all 20 comments
            </div> */}
          </footer>
        </aside>
      </div>
    </>
  );
};

export default Home;
