
import logo from "./Images/logo.jpg"

function Nav() {
  return (
    <>
    <ul >
      
      <div className="nav-container">
        <div className="nav-display">
          <img className="nav-display-figure" src={logo} alt=" school logo" />
        </div>
        <div className="navlist">
      <a className="nav-items" href="/">
        <li className="navlist-item" >Home</li>
      </a>
      </div>
      <div className="navlist">
      <a className="nav-items" href="/about">
        <li className="navlist-item">About</li>
      </a>
      </div>
       <div className="navlist">
      <a className="nav-items" href="/contact">
        <li className="navlist-item">Contact</li>
      </a>
      </div>
      <div className="navlist">
      <a className="nav-items" href="/founders page">
        <li className="navlist-item">Founder's Page</li>
      </a>
      </div>
      </div>
      
      </ul>
    </>
  )
}

export default Nav
