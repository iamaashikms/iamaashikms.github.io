import { FC } from "react";
import './Home.scss';
const Home: FC = () => {
  return (
    <>
      <nav>
        <div className="logo">Aashik M S</div>
        <div className="nav-bar">
          <ul className="nav-links">
            <li className="About">About</li>
            <li className="Experience">Experience</li>
            <li className="Project">Project</li>
            <li className="Contact">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Home;
