import NextLink from "next/link";

export default function ComingSoon() {
  return (
    <>
      <section className="container">
        <h1 className="headline">Coming soon</h1>
        <NextLink href="/home">
          <a className="btn primary">Go to Home</a>
        </NextLink>
      </section>

      <style jsx>{`
        .container {
          height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 2rem;
        }
        .headline {
          font-size: 10vh;
          text-align: center;
          font-weight: 600;
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
}
