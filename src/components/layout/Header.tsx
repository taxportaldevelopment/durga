import { useState } from 'react'
import { IoIosCall ,IoLogoInstagram} from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='sticky lg:top-0 z-50'>
          <div className='bg-blue-600 pt-1'>
         <div className='flex justify-between items-center'>
             <div className='p-2 w-full md:w-1/2 h-10 text-white lg:flex items-center justify-center'>
                 <div className="md:flex items-center gap-2">
                     <div className="item flex items-center gap-2 text-xs">
                          <IoIosCall className='lg:w-5 lg:h-5' />
                          <span>+91 1234567890</span>
                     </div>
                     <div className="item flex items-center gap-2 text-xs">
                            <MdOutlineMail className='lg:w-5 lg:h-5' />
                          <span>example@example.com</span>
                     </div>
                 </div>
             </div>
             <div className="p-2 w-full md:w-1/2 h-10 text-white mt-2 lg:flex items-center justify-center">
                 {/* social media links and icons */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-gray-300"><TiSocialFacebook className='w-5 h-5' />    </a>
                        <a href="#" className="hover:text-gray-300"><CiTwitter className='w-5 h-5' />    </a>
                        <a href="#" className="hover:text-gray-300"><IoLogoInstagram className='w-5 h-5' />    </a>
                    </div>
             </div>
             <div className="clear-both"></div>
             <div className="border-t border-red-600 mt-2 mb-2">
             </div>
         </div>
              
          </div>
      <header className="pb-6 bg-white lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <!-- lg+ --> */}
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 focus:text-blue-700" aria-label="Logo">
                <img className="w-auto h-8 lg:h-10" src={logo} alt="" />
                <span className='ms-3'>ASSOCIATES</span>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {/* Menu closed: hamburger */}
              <svg className={`${menuOpen ? 'hidden' : 'block'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
              {/* Menu open: X */}
              <svg className={`${menuOpen ? 'block' : 'hidden'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <Link to="/" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </Link>
              <Link to="/about" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </Link>
                <div className="relative group">
                <button className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-center">
                  Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute -left-6 top-4 z-50 hidden mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                  <Link to="/real-estate" className="block px-4 py-2 text-sm text-black hover:bg-blue-50">Real Estate Blog</Link>
                  <Link to="/construction" className="block px-4 py-2 text-sm text-black hover:bg-blue-50">Construction</Link>
                </div>
                </div>
              {/* <Link to="/pricing" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </Link> */}
            </div>

            <Link to="/contact" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Contact Now </Link>
          </nav>

          {/* <!-- xs to lg --> */}
          <nav className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link to={"/"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>setMenuOpen(false)}> Home </Link>
                <Link to={"/about"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>setMenuOpen(false)}> About</Link>
                <Link to={"/real-estate"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>setMenuOpen(false)}> Real Estate Blog</Link>
                <Link to={"/construction"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>setMenuOpen(false)}> Construction</Link>
              </div>
            </div>
            <div className="px-6 mt-6">
              <Link to={"/contact"} className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Contact Now </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header