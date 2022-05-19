import { ChangeEvent } from "react";
import NextLink from "next/link";

import Tooltip from "components/Tooltip";

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
        <>
          <NextLink href="/share">
            <a className="btn primary">Crear</a>
          </NextLink>

          <Tooltip content={<UserOptions />}>
            <picture className="profile-photo">
              <img src={user.user?.image || ""} alt={user.user?.name || ""} />
            </picture>
          </Tooltip>
        </>
      ) : (
        <NextLink href="/login">
          <a className="btn primary">Login </a>
        </NextLink>
      )}
    </>
  );
}

function UserOptions() {
  const { signOut } = useUser();
  return (
    <>
      <div className="container">
        <button className="btn">Settings</button>
        <button onClick={() => signOut()} className="btn primary">
          Loggout
        </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </>
  );
}
