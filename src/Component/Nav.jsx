
import logo from "./Images/logo.jpg"

function Nav() {
  return (
    <ul className=" bg-blue-50 flex gap-2 pl-1 pt-4 md:gap-20 lg:gap-28 xl:gap-28 2xl:gap-28" >
      <img className="nav-display-figure lg:h-24 lg:w-24" src={logo} alt=" school logo"/>
      <a className="nav-items" href="/">
        <li className="navlist-item mt-2" >Home</li>
      </a>
      <a className="nav-items" href="/about">
        <li className="navlist-item mt-2">About</li>
      </a>
      <a className="nav-items" href="/contact">
        <li className="navlist-item mt-2">Contact</li>
      </a>
      <a className="nav-items" href="/founders page">
        <li className="navlist-item mt-2">Founder's Page</li>
      </a>
      </ul>
    
  )
}

export default Nav
