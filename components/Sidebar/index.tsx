import NextLink from "next/link";
import { useRouter } from "next/router";

import Avatar from "components/Avatar";

import { linksList } from "components/Sidebar/utils";

import { useUser } from "hooks/useUser";

export default function Sidebar() {
  const { user: userData } = useUser();
  const router = useRouter();
  const { pathname } = router;

  const user = userData?.user;

  return (
    <>
      <a href="" className="profile-link">
        <picture className="profile-photo">
          <Avatar src={user?.image || ""} alt="profile 1" />
        </picture>
        <div className="handle">
          <h4>{user?.name}</h4>
          <p className="text-muted text-sm">{user?.email}</p>
        </div>
      </a>

      <aside className="sidebar">
        {linksList.map(({ href, icon, label }) => (
          <NextLink href={href} key={href}>
            <a className={`menu-item ${href === pathname ? "active" : ""}`}>
              {icon}
              <span className="menu-item-text">{label}</span>
            </a>
          </NextLink>
        ))}
      </aside>
    </>
  );
}
/*
<a className="menu-item" id="notifications">
  <span className="menu-item-icon">
    <i className="uil uil-bell">
      <small className="notification-count">6</small>
    </i>
  </span>
  <h3 className="menu-item-text">Notificaciones</h3>
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
  <h3 className="menu-item-text">Mensajes</h3>
</a>
*/
