import "./services.scss";

function Services({ color }) {
  const handleSetTheme = e => {
    setColor(e.target.value);
    window.localStorage.setItem("theme", e.target.value);
  };
  return (
    <>
      <main className={color}>
        <div className="services-container">
            <li className="services-list">
              <h2 className="services-heading">Our services</h2>
              <hr />
              <p className="services-paragraph">
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
              <a className="services-link" href="/">
                Consult today
              </a>
            </li>
            <ul className="services-item">
            <li>
                <img src="/images/lupa.svg" alt="" />
              <h3>Search doctor</h3>
              <p>
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </li>
            <li>
            <img src="/images/frame.svg" alt="" />
              <h3>Online pharmacy</h3>
              <p>
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </li>
            <li>
            <img src="/images/frame-table.svg" alt="" />
              <h3>Consultation</h3>
              <p>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </li>
            <li>
            <img src="/images/frame-heart.svg" alt="" />
              <h3>Details info</h3>
              <p>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </li>
            <li>
            <img src="/images/medicine-box.svg" alt="" />
              <h3>Emergency care</h3>
              <p>
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </li>
            <li>
            <img src="/images/plus-table.svg" alt="" />
              <h3>Tracking</h3>
              <p>
              Track and save your medical history and health data 
              </p>
            </li>
            <a className="services-btm-link" href="/">Learn more</a>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Services;
