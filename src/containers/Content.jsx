import icon1 from "../assets/icon-supervisor.svg";
import icon2 from "../assets/icon-team-builder.svg";
import icon3 from "../assets/icon-karma.svg";
import icon4 from "../assets/icon-calculator.svg";

const Content = () => {
  return (
    <>
      <main>
        <div className="container">
          <header class="header_container">
            <h1>
              <span>
                Reliable, efficient delivery
              </span>
              Powered by Technology
            </h1>
            <p>
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </header>

          <section className="feature">
            <div className="col">
              <div className="card cyan">
                <h2>Supervisor</h2>
                <p>Monitors activity to identify project roadblocks</p>
                <img src={icon1} alt="image" />
              </div>
            </div>

            <div className="col">
              <div className="card red">
                <h2>Team Builder</h2>
                <p>Scans our talent network to create the optimal team for your project</p>
                <img src={icon2} alt="image" />
              </div>

              <div className="card orange">
                <h2>Karma</h2>
                <p>Regularly evaluates our talent to ensure quality</p>
                <img src={icon3} alt="image" />
              </div>
            </div>

            <div className="col">
              <div className="card blue">
                <h2>Calculator</h2>
                <p>Uses data from past projects to provide better delivery estimates</p>
                <img src={icon4} alt="image" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Content;
