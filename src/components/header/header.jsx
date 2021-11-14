import "./header.scss";

function Header({ color, setColor }) {
  const handleSetTheme = e => {
    setColor(e.target.value);
    window.localStorage.setItem("theme", e.target.value);
  };
  return (
    <>
      <header className={color}>
        <div className="container">
          <a href="/">
            <img
              src="/images/trafalgar-logo.svg"
              alt="there is a logo"
              width="160"
            />
          </a>

          <div className="links-wrapper">
            <a className="links colors" href="/">
              Home
            </a>
            <a className="links" href="/">
              Find a doctor
            </a>
            <a className="links" href="/">
              Apps
            </a>
            <a className="links" href="/">
              Testimonials
            </a>
            <a className="links" href="/">
              About us
            </a>
          </div>

          <div className="selects-wrapper">
            <select className="lang-select" name="languages" id="languages">
              <option value="languages" selected>
                UZ
              </option>
              <option value="languages">RU</option>
              <option value="languages">ENG</option>
              <option value="languages">BAA</option>
            </select>

            <select defaultValue={color}
              className="wall-select"
              name="languages"
              id="languages"
              onChange={handleSetTheme}
            >
              <option value="light">
                Light
              </option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
