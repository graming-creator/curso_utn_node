import { Link} from "react-router-dom";
import "bulma/css/bulma.min.css";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <header>
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-white">MyApp</Link>
          </div>
          <div className="navbar-brand">
            <div className="navbar-end">
              <Link to="/" className="navbar-item has-text-white">Home</Link>
              <Link to="/dashboard" className="navbar-item has-text-white">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>
      </header>

      <section className="section">
        <div className="container">
          { children }
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>&copy; 2025 MyApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export { Layout }
