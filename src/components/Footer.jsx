import Logo from './../assets/WT_Realm_Logo.svg'
import { GrFacebookOption } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { BiLogoYoutube } from 'react-icons/bi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className='bg-green-100'>
        <div className='px-12 py-32 w-full max-w-[110rem] mx-auto text-white flex flex-col 
        md:flex-row justify-start items-start gap-y-[6rem]'>
            <div className='w-full flex flex-col justify-start items-start gap-[2rem]'>
                <div>
                    <img src={Logo} alt="Logo" className='w-full h-[2rem] md:h-[3rem]' />
                </div>

                <ul className='flex flex-row justify-start items-center gap-[1rem] md:gap-[1.5rem]'>
                    <li>
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <GrFacebookOption />
                        </IconContext.Provider>
                    </li>
                    <li>
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <BsTwitter />
                        </IconContext.Provider>
                    </li>
                    <li>
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <PiInstagramLogoFill />
                        </IconContext.Provider>
                    </li>
                    <li>
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <BiLogoYoutube />
                        </IconContext.Provider>
                    </li>
                </ul>

                <div>
                    <p className='font-light text-sm md:text-base'>contact@wt-realm.com</p>
                </div>
            </div>

            
            <div className='w-full flex flex-row justify-start md:justify-center items-start'>
                <ul className='w-fit flex flex-col justify-start items-start font-light gap-[2rem]'>
                    <li className='text-sm md:text-base'>Support Links</li>
                    <li className='text-white/60 text-sm md:text-base cursor-pointer'>My Account</li>
                    <li className='text-white/60 text-sm md:text-base cursor-pointer'>Shipping and returns</li>
                    <li className='text-white/60 text-sm md:text-base cursor-pointer'>FAQ</li>
                    <li className='text-white/60 text-sm md:text-base cursor-pointer'>Terms and Conditions</li>
                    <li className='text-white/60 text-sm md:text-base cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>

            <div className='w-full flex flex-col justify-start items-start md:items-end'>
                <div className='flex flex-col justify-start items-start gap-[2rem]'>
                    <p className='text-[1rem] md:text-[1.5rem] font-voces'>Subscribe to our newsletter</p>

                    <div className='relative'>
                        <div className='absolute h-full flex flex-col justify-center items-center pl-2'>
                            <IconContext.Provider value={{size: "2rem"}}>
                                <MdOutlineMailOutline />
                            </IconContext.Provider>
                        </div>

                        <input type="text" placeholder='Enter your email'
                        className='w-[15rem] md:w-[20rem] bg-transparent border-white/40 border-2 py-2 text-sm pl-12 pr-4' />
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-row justify-center items-start py-6'>
            <p className='w-fit text-white/60'>© 2023 WT Realm</p>
        </div>
    </div>
  )
}
