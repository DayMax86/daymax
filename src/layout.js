import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/crochet">crochet</Link>
          </li>
          <li>
            <Link to="/linguasyne/">
              <li>
                <Link to="/privacypolicy">privacypolicy</Link>
              </li>
              <li>
                <Link to="/deleteaccount">deleteaccount</Link>
              </li>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

