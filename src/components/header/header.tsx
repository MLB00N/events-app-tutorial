import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src={"/images/logo_black.png"}
            width={50}
            height={50}
            alt={"logo"}
          />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </header>
  );
};
