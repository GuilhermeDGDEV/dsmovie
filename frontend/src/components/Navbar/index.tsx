import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
  return (
    <header className="d-flex align-items-center">
      <nav className="container">
        <div className="d-flex justify-content-between text-light dsmovie-nav-content">
          <h1 className="m-0">DSMovie</h1>
          <a href="https://github.com/GuilhermeDGDEV" target="_blank" className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <GithubIcon />
              <p className="dsmovie-contanct-link">/GuilhermeDGDEV</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;