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
        <picture className="profile-photo">
          <img
            src="https://images.unsplash.com/photo-1651634099348-e4c38cfaa6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile 1"
          />
        </picture>
      ) : (
        <NextLink href="/login">
          <a className="btn primary">Login </a>
        </NextLink>
      )}
    </>
  );
}
