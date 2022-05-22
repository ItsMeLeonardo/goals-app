import NextLink from "next/link";

export default function ComingSoon() {
  return (
    <>
      <section className="container">
        <h1 className="headline">Coming soon</h1>
        <NextLink href="/home">
          <a className="btn primary">Go to Home</a>
        </NextLink>
        {/* <img
          className="bg"
          src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
          alt=""
        /> */}
      </section>

      <style jsx>{`
        .bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
        }
        .container {
          height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 2rem;
        }
        .headline {
          font-family: sans-serif;
          font-size: 10vh;
          text-align: center;
          font-weight: 900;
          color: white;
          text-shadow: 0 0.5rem 1rem rgb(51 51 51 / 45%);
        }
      `}</style>
    </>
  );
}
