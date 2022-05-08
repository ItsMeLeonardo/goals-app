import NextLink from "next/link";

import NavbarRightContent from "components/Navbar/NavbarRightContent";

export default function Layout() {
  return (
    <nav className="navbar">
      <div className="container">
        <NextLink href="/">
          <a>
            <h2 className="logo">Juntos_</h2>
          </a>
        </NextLink>
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
          <NavbarRightContent />
        </div>
      </div>
    </nav>
  );
}
