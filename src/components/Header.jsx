import Announce from "./Announce";
import WTLogo from './../assets/WT_Realm_Logo.svg'
import { FaUserCircle } from 'react-icons/fa'
import { BiCartAlt } from 'react-icons/bi'
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from 'react-icons/rx';
import DesktopHeaderMenu from './DesktopHeaderMenu'
import MobileHeaderMenu from './MobileHeaderMenu'
import { useState } from "react";

export default function Header() {

    const [isNavClosed, setIsNavClosed] = useState(true);

    const onNavClose = () => {
        setIsNavClosed(true);
    };

  return (
    <div className="fixed z-50 w-full">
        <Announce/>

        <MobileHeaderMenu isNavClosed={isNavClosed} onClose={onNavClose} />
        
        <header className="w-full h-[8rem] bg-green-100 flex flex-row justify-center items-center">
            <div className="relative w-full max-w-[110rem] px-12 flex flex-row justify-start md:justify-center items-center">
                <div className="cursor-pointer">
                    <img src={WTLogo} alt="Page Logo" />
                </div>

                <DesktopHeaderMenu />

                <ul className="text-white flex flex-row justify-center items-center gap-[1rem] 
                md:gap-[3rem] ml-auto md:ml-0">
                    <li 
                    className="cursor-pointer md:hidden"
                    onClick={() => setIsNavClosed(false)}
                    >
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <RxHamburgerMenu/>
                        </IconContext.Provider>
                    </li>
                    <li className="cursor-pointer">
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <FaUserCircle/>
                        </IconContext.Provider>
                    </li>
                    <li className="cursor-pointer">
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <BiCartAlt/>
                        </IconContext.Provider>
                    </li>
                </ul>

                <div></div>
            </div>
        </header>
    </div>
  )
}
