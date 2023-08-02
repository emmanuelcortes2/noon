import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <h1>noon</h1>
        <ul>
          <li>
            <button>Pricing</button>
          </li>
          <li>
            <button>Features</button>
          </li>
          <li>
            <button>Open Sources</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
        <button>Sign in</button>
      </div>
    </>
  );
}
