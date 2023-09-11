import { FC } from "react";
import './Home.scss';
const Home: FC = () => {
  return (
    <>
      <nav>
        <div className="logo">Aashik M S</div>
        <div className="nav-bar">
          <ul className="nav-links">
            <li><a href="#about"/>About</li>
            <li><a href="#experience"/>Experience</li>
            <li><a href="#project"/>Projects</li>
            <li><a href="#contact"/>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Home;
