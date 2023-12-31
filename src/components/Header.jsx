import MenuItem from "./MenuItem";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

export default function Header () {
    return (
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
                <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill} />
            </div>
            <div className="flex items-center space-x-5">
                <DarkModeToggle />
                <Link href="/">
                    <h2>
                        <span className="font-bold bg-yellow-500 px-2 py-2 rounded-lg mr-1">IMDb</span>
                        <span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
};