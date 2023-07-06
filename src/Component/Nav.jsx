
import logo from "./Images/logo.jpg"

function Nav() {
  return (
    <ul className=" bg-blue-50  flex gap-2 pt-4 md:gap-20 lg:gap-20 xl:gap-20 2xl:gap-20" >
      <img className="nav-display-figure w-14 md:w-20 lg:w-20 lg:pl-7 xl:w-20 xl:pl-7 2xl:w-24 2xl:pl-7 md:pl-7" src={logo} alt=" school logo"/>
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
