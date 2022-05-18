import { ChangeEvent } from "react";
import NextLink from "next/link";

//utils
import { useUser } from "hooks/useUser";

export default function NavbarRightContent() {
  const { user } = useUser();

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (checked) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  };

  return (
    <>
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
      {user ? (
        <NextLink href="/home">
          <a>
            <picture className="profile-photo">
              <img src={user.user?.image || ""} alt={user.user?.name || ""} />
            </picture>
          </a>
        </NextLink>
      ) : (
        <NextLink href="/login">
          <a className="btn primary">Login </a>
        </NextLink>
      )}
    </>
  );
}
