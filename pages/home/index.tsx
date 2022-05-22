import NextLink from "next/link";

import FeedList from "components/Feed/FeedList";
import Stories from "components/Story/Stories";

export default function Home() {
  return (
    <>
      <Stories />

      <div className="create-post-form">
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
        <NextLink href="/share">
          <a className="btn primary">Crear</a>
        </NextLink>
      </div>
      <FeedList />
    </>
  );
}

Home.requireAuth = true;
