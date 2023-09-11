import { FC } from "react";
import './Home.scss';
const Home: FC = () => {
  return (
    <>
      <nav>
        <div className="home__logo">Aashik M S</div>
        <div className="home__nav-bar">
          <ul className="home__nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Home;
