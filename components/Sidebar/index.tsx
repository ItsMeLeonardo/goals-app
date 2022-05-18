import NextLink from "next/link";
import { useRouter } from "next/router";

const linksList = [
  {
    href: "/home",
    label: "Home",
    icon: <i className="uil uil-home"></i>,
  },
  {
    href: "/explore",
    label: "Explorar",
    icon: <i className="uil uil-compass"></i>,
  },
  {
    href: "/saved",
    label: "Mi lista",
    icon: <i className="uil uil-bookmark"></i>,
  },
  {
    href: "/stats",
    label: "Estadísticas",
    icon: <i className="uil uil-chart-line"></i>,
  },
  {
    href: "/settings",
    label: "Configuración",
    icon: <i className="uil uil-setting"></i>,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
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
