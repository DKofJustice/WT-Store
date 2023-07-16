import { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { MdClose } from 'react-icons/md'
import { IconContext } from "react-icons";
import PropTypes from 'prop-types';

export default function MobileHeaderMenu({ isNavClosed, onClose }) {

    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);


    const handleNavClose = (e) => {
        if (e.target.id === "nav-container") {
            onClose();
        }
    };

  return (
        <div 
        id='nav-container' 
        className={`${ !isNavClosed ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' }
        fixed bg-black bg-opacity-50 inset-0 backdrop-blur-sm h-full transition-all duration-200`}
        onClick={handleNavClose}
        >
            <ul className={`${ isNavClosed ? '-right-[20rem]' : 'right-0' } md:hidden absolute top-0 right-0 w-full max-w-[20rem] h-full bg-white text-black flex 
            flex-col justify-start items-start text-base gap-[2rem] py-[8rem] transition-all duration-200 overflow-y-auto overflow-x-hidden font-voces`}>

                    <li 
                    className='w-full flex flex-row justify-end -translate-y-20 px-[3rem]'
                    onClick={onClose}
                    >
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <MdClose />
                        </IconContext.Provider>
                    </li>

                    <li className="relative">
                        <div className="flex flex-row items-center gap-[1rem] px-[2rem]
                        cursor-pointer" onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}>
                            Shop 
                            <IconContext.Provider value={{size: ".8rem"}}>
                                <SlArrowDown />
                            </IconContext.Provider>
                        </div>

                        <ul className={`${isShopDropdownOpen ? 'opacity-100 h-full pointer-events-auto' : 'opacity-0 h-0 pointer-events-none' } 
                        relative top-0 w-[24rem] bg-white text-black flex flex-col
                        justify-center items-start gap-[1rem] shadow-xl text-voces transition-all duration-200`}>
                            <li className="px-10 cursor-pointer">Men&apos;s Watches</li>
                            <li className="px-10 cursor-pointer">Women&apos;s Watches</li>
                            <li className="px-10 cursor-pointer">Men&apos;s Wristbands</li>
                            <li className="px-10 cursor-pointer">Women&apos;s Wristbands</li>
                            <li className="px-10 cursor-pointer">Men&apos;s Sunglasses</li>
                            <li className="px-10 cursor-pointer">All Products</li>
                        </ul>
                    </li>

                    <li className="relative">
                        <div className="flex flex-row items-center gap-[1rem] px-[2rem] cursor-pointer"
                        onClick={() => setIsBrandsDropdownOpen(!isBrandsDropdownOpen)}>
                            Brands 
                            <IconContext.Provider value={{size: ".8rem"}}>
                                <SlArrowDown/>
                            </IconContext.Provider>
                        </div>

                        <ul className={`${isBrandsDropdownOpen ? 'opacity-100 h-full pointer-events-auto' : 'opacity-0 h-0 pointer-events-none' } 
                        realtive top-0 w-[24rem] bg-white text-black flex flex-col
                        justify-center items-start gap-[1rem] shadow-xl text-voces transition-all duration-200`}>
                            <li className="px-10 cursor-pointer">Brand 1</li>
                            <li className="px-10 cursor-pointer">Brand 2</li>
                            <li className="px-10 cursor-pointer">Brand 3</li>
                            <li className="px-10 cursor-pointer">Brand 4</li>
                            <li className="px-10 cursor-pointer">Brand 5</li>
                            <li className="px-10 cursor-pointer">Brand 6</li>
                        </ul>
                    </li>

                    <li className="cursor-pointer px-[2rem]">News</li>

                    <li className="relative">
                        <div className="flex flex-row items-center gap-[1rem] cursor-pointer px-[2rem]"
                        onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}>
                            More 
                            <IconContext.Provider value={{size: ".8rem"}}>
                                <SlArrowDown/>
                            </IconContext.Provider>
                        </div>

                        <ul className={`${isMoreDropdownOpen ? 'opacity-100 h-full pointer-events-auto' : 'opacity-0 h-0 pointer-events-none' } 
                        relative top-0 w-[24rem] bg-white text-black flex flex-col
                        justify-center items-start gap-[1rem] shadow-xl text-voces transition-all duration-200`}>
                            <li className="px-10 cursor-pointer">Contact us</li>
                            <li className="px-10 cursor-pointer">About us</li>
                            <li className="px-10 cursor-pointer">Blog</li>
                            <li className="px-10 cursor-pointer">Reviews</li>
                        </ul>
                    </li>
                </ul>
            </div>
  )
}

MobileHeaderMenu.propTypes = {
    isNavClosed: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  