import NextLink from "next/link";

import NavbarRightContent from "components/Navbar/NavbarRightContent";
import SearchBar from "components/Navbar/SearchBar";

export default function Layout() {
  return (
    <nav className="navbar">
      <div className="container">
        <NextLink href="/">
          <a>
            <h2 className="logo">Juntos_</h2>
          </a>
        </NextLink>
        <SearchBar />

        <div className="create">
          <NavbarRightContent />
        </div>
      </div>
    </nav>
  );
}
