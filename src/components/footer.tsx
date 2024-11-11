import Link from "next/link";

export default function Footer(){
    return(
        <div className="footerContainer">
             <ul className="footerButtons">
                <Link href={'/about-us'}>
              <li className="aboutUs">About Us</li>
              </Link>

              <Link href={'/contact-us'}>
              <li className="ContactUs">Contact Us</li>
              </Link>
              </ul>
        </div>
    )
}