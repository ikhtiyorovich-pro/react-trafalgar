import "./main-healthcare.scss";

function Main({ color }) {
  return (
    <>
      <main className={color}>
        <div className="container">
          <ul className="healthcare-item">
            <li className="healthcare-list">
              <h2 className="healthcare-heading">Virtual healthcare for you</h2>
              <p className="healthcare-paragraph">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <a className="healthcare-link" href="/">
                Consult today
              </a>
            </li>
            <li className="healthcare-img-list">
              <img
                className="healthcare-img"
                src="/images/healthcare-img.svg"
                alt="there is a healthcare img"
                width="593"
              />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Main;
