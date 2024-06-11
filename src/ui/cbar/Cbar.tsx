import "./Cbar.css";

function Cbar() {
  return (
    <div>
      <div className="Cbar">
        <ul className="navbar-list sm:text-sx">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">About</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/login">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cbar;
