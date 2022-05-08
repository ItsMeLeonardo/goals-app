import { useUser } from "hooks/useUser";

type AuthProviders = "google" | "github"; //| "facebook" | "twitter";

export default function Login() {
  const { signIn } = useUser();

  const handleLogin = (provider: AuthProviders) => {
    signIn(provider, { callbackUrl: "/home" });
  };

  return (
    <>
      <section className="page_content">
        <aside className="form_container">
          <h1 className="form_title">
            Entra y aprendamos
            <span className="logo"> Juntos_</span>
          </h1>

          <button
            className="btn github_button"
            onClick={() => handleLogin("github")}
          >
            <i className="uil uil-github-alt"></i>
            <span>Github</span>
          </button>
          <button
            className="btn google_button"
            onClick={() => handleLogin("google")}
          >
            <i className="uil uil-google"></i>
            <span>Google</span>
          </button>
        </aside>
      </section>

      <style jsx>{`
        .page_content {
          width: 100%;
          height: 50vh;
          display: grid;
          place-content: center;
        }
        .form_container {
          background: var(--color-white);
          height: 100%;
          width: 100vw;
          max-width: 280px;
          border-radius: var(--card-radius);
          display: flex;
          gap: 1rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: var(--card-padding);
        }
        .form_title {
          font-size: 1.25rem;
          text-align: center;
        }
        .logo {
          color: var(--color-primary);
        }
        .google_button,
        .github_button {
          width: 100%;
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .google_button i,
        .github_button i {
          font-size: 1rem;
        }
        .google_button {
          background: var(--color-primary);
        }
        .github_button {
          background: var(--color-black);
        }
      `}</style>
    </>
  );
}
