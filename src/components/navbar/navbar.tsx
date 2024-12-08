import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TbUserExclamation } from "react-icons/tb";
import "./index.scss";
import Link from "next/link";
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="hidden"></div>
                <ul className="navbar-buttons">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-icons">
                    <li>
                        <TbUserExclamation size={23} />
                    </li>
                    <li>
                        <CiSearch size={23} />
                    </li>
                    <li>
                        <IoHeartOutline size={23} />
                    </li>
                    <li>
                        <AiOutlineShoppingCart size={23} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
