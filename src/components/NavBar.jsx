import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <a className="nav-link" href="/">About Me</a>
      <a className="nav-link" href="/timeline">Timeline</a>
      <a className="nav-link" href="/projects">Projects</a>
      <a className="nav-link" href="/contacts">Contacts</a>
    </div>
  );
};

export default NavBar;
