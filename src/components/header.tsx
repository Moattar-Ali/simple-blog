import Link from "next/link";

export default function Header(){
    return(
        <div className="headerContainer">
        <ul className="headerButtons">
        <Link href={'/'}>
            <li className="Home">Home</li>
            </Link>
            <Link href={'/dresses'}>
            <li className="dresses">Dresses</li>
            </Link>
            <Link href={'/footwear'}>
            <li className="footwear">Footwear</li>
            </Link>
            <Link href={'/bags'}>
            <li className="bags">Bags</li>
            </Link>
            <Link href={'/jewelries'}>
            <li className="jwelries">Jewellries</li>
            </Link>
            <Link href={'/skin-products'}>
            <li className="skinCareProduct">Skin Care Products</li>
            </Link>
            <Link href={'/makeup-products'}>
            <li className="makeupProducts">Makeup Products</li>
            </Link>
            </ul>
        </div>
    )
}