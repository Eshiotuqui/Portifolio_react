import './navbar_styles.scss';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isSidebarVisible, closeSidebar }) => {
  return (
    <aside className={`sidebar ${isSidebarVisible ? 'show_sidebar' : ''}`} id="sidebar">
      <nav className="nav">
        <div className="nav_logo">
          <NavLink to="/" className="nav_logo_text" onClick={closeSidebar}>S</NavLink>
        </div>

        <div className="nav_menu">
          <div className="menu">
            <ul className="nav_list">
              <li className="nav_item">
                <NavLink to="/" className="nav_link" onClick={closeSidebar}>
                  <i className="uil uil-estate nav_icon"></i>
                  Home
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to="/curriculum" className="nav_link" onClick={closeSidebar}>
                  <i className="uil uil-user nav_icon"></i>
                  Currículo
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to="/projetos" className="nav_link" onClick={closeSidebar}>
                  <i className="uil uil-briefcase-alt nav_icon"></i>
                  Projetos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="btn_share">
          <NavLink to="/contato" style={{ color: "var(--skin-color)" }} onClick={closeSidebar}>
            <i className="uil uil-share-alt social_share"></i>
          </NavLink>
        </div>

        <div className="nav_close" id="nav_close" onClick={closeSidebar}>
          <i className="uil uil-times"></i>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
