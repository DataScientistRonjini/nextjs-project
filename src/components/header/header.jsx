import Image from "next/image"
import Link from "next/link"

export const Header = ()=>(
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/images/event_manage_logo.png?v=789111'} width={150} height={150} />
          <nav>
            <ul>
              <li><Link href='/' passHref>Home</Link></li>
              <li><Link href='/events' passHref>Events</Link></li>
              <li><Link href='/about-us' passHref>About Us</Link></li>
            </ul>
          </nav>
        </div>
        <p className="title">Sed ut perspiciatis unde omnis</p>
      </div>
  </header>
)