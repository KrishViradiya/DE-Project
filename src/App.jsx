import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-left">
          <h1>Design Engineering </h1>

          <p>
            YOU DESERVE TO SUBMIT CANVASES ON TIME AND WE'RE HERE TO HELP YOU
          </p>

          <div className="btns">
            <a href="https://de.gtu.ac.in/Content/Images/MethodologyCanvas/AEIOU%20Summary%20Canvas%20-%20A1%20size.jpg">
              {" "}
              <button className="btn-1">DOWNLOAD CANVAS</button>{" "}
            </a>
            <button className="btn-2">DOCUMENTATION</button>
          </div>

          <div className="shopping">
            <p> Canvases also Available On</p>
          </div>
          <div className="logos">
            <a
              target="__blank"
              href="https://de.gtu.ac.in/StudyMaterial_Presentation#Academics "
            >
              {" "}
              <img
                className="logos"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Gujarat_Technological_University_%28GTU%29_logo.jpg"
                alt="amazon"
              />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            className="right-image"
            src="https://www.goup.ae/blog/wp-content/uploads/2021/09/logo-design-scaled.jpg"
            alt=""
          />
        </div>
      </div>
     <Footer />

    </>
  );
}

export default App;
