import { ChangeEvent } from "react";

export default function Layout() {
  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (checked) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">Juntos_</h2>
        <label className="search-bar">
          <i className="uil uil-search"></i>
          <input
            className="search-input"
            type="search"
            name="search"
            id="search"
            placeholder="Busca por creadores, proyectos o temas"
          />
        </label>
        <div className="create">
          <label className="theme-btn">
            <input
              onChange={toggleTheme}
              type="checkbox"
              name="theme"
              id="theme-checkbox"
              className="theme-checkbox"
              hidden
            />
            <i className="uil uil-sun light-theme-icon"></i>
            <i className="uil uil-moon dark-theme-icon"></i>
          </label>
          <picture className="profile-photo">
            <img
              src="https://images.unsplash.com/photo-1651634099348-e4c38cfaa6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="profile 1"
            />
          </picture>
        </div>
      </div>
    </nav>
  );
}
