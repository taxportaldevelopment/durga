import logo from "../../assets/logo.png";
import img1 from "../../assets/realestate/2.png";
import img2 from "../../assets/realestate/21.png";
import img3 from "../../assets/realestate/22.png";
// import img4 from "../../assets/realestate/23.png";
// import img5 from "../../assets/realestate/feature/1.jpg";
import img6 from "../../assets/realestate/feature/2.jpg";
// import img7 from "../../assets/realestate/feature/3.jpg";
import img8 from "../../assets/realestate/3d-house-model-with-modern-architecture.jpg";

// icons
import { IoBedOutline ,IoLibraryOutline} from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaVectorSquare,FaHouseCircleCheck} from "react-icons/fa6";
import { BiSolidCar } from "react-icons/bi";
import { PiSwimmingPool } from "react-icons/pi";
import { MdOutlineSecurity,MdOutlineKingBed } from "react-icons/md";
import { GiMedicalPack,GiKidSlide} from "react-icons/gi";
// banner images
import imgs1 from "../../assets/realestate/img/1.png";
import imgs2 from "../../assets/realestate/img/2.png";
import imgs3 from "../../assets/realestate/img/3.png";
import imgs4 from "../../assets/realestate/img/4.png";
const RealEstate = () => {
  return (
    <div>
                     <div className="realestate-banner flex items-center">
                <div className="lg:ps-20 p-10">
                     <div className='flex items-center'>
                         <img src={logo} className='h-14' alt="Logo" />
                         <h1 className='text-white text-2xl font-bold ms-2'>ASSOCIATION</h1>
                     </div>
                    <h1 className="text-white text-4xl font-bold pt-36 product-font">Buy A New Land....</h1>
                    <span className="border-l-2 border-amber-200 inline-block pl-4 pt-3">
                        <p className="text-white antonio first-letter:text-2xl ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nihil?
                        </p>
                    </span>
                </div>
            </div>
            {/* other content */}
            {/* grid system use three columns */}
            <div className="realestate-content lg:px-25 p-4 lg:p-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden p-2 lg:p-10 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                        <h1 className='text-center text-2xl opacity-75'>Investment Value & Long-Term Growth</h1>
                        <div className="p-4">
                          <p className='text-center'>
                            Real estate is one of the most stable and appreciating assets. Property values tend to rise over time, providing both capital growth and rental income opportunities. It’s a reliable way to build long-term financial security.
                          </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden p-2 lg:p-10 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                        <h1 className='text-center text-2xl opacity-75'>Infrastructure & Location Advantage</h1>
                        <div className="p-4">
                          <p className='text-center'>
                            The location of a property determines its real value. Proximity to roads, schools, hospitals, and commercial areas increases both demand and resale potential. Good infrastructure planning directly boosts property worth.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden p-2 lg:p-10 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                        <h1 className='text-center  text-2xl lg:opacity-75'>Sustainable & Smart Development</h1>
                        <div className="p-4">
                          <p>Modern real estate focuses on eco-friendly designs, energy efficiency, and smart technologies. Sustainable construction reduces maintenance costs, benefits the environment, and attracts modern buyers and investors.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Find Properties in These Cities */}
  <div className="realestate-cities lg:px-25 p-4 lg:p-10 py-20 bg-gray-100">
  <h1 className='lg:text-3xl text-2xl font-bold pb-1'>Find Properties in These Cities</h1>
  <p className='lg:w-2/3 p-2 py-6'>
    Before you start looking for a home, it's essential to know how much you can afford. 
    Calculate your budget by considering your income, expenses, and savings for a down payment.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[imgs1,imgs2,imgs3,imgs4].map((item,i) => (
      <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-xl">
        <div className="image-sec relative">
          <img src={item} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    ))}
  </div>
</div>
             {/* our services */} 
             {/* grid use three column layout */}
              <div className="realestate-services lg:px-25 p-5 lg:p-10 py-20">
                   <h1 className='py-4 text-center'><span className='px-3 py-2 bg-orange-400 rounded text-white'>OUR SERVICES</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

                  <div className="children bg-white rounded-lg shadow-md overflow-hidden p-8 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                      <div className='flex justify-center'>
                        <img
                          src={img2}
                          alt=""
                          className=" h-40 object-cover md:h-48 lg:h-40"
                        />
                      </div>
                    <div className="p-4">
                      
                       <h1 className='text-center py-2 font-semibold text-2xl antonio opacity-70'>Buy a home</h1>
                      <p className='text-center'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                  </div>
                  <div className="children bg-white rounded-lg shadow-md overflow-hidden p-10 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                               <div className='flex justify-center'>
                        <img
                          src={img3}
                          alt=""
                          className=" h-40 object-cover md:h-48 lg:h-40"
                        />
                      </div>
                       <h1 className='text-center py-2 font-semibold text-2xl antonio opacity-70'>Rent a home</h1>
                    <div className="p-4">
                      <p className='text-center'>Hiring a property management company allows owners to focus on other aspects of their lives or invest their time</p>
                    </div>
                  </div>

                  <div className="children bg-white rounded-lg shadow-md overflow-hidden p-10 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                                                     <div className='flex justify-center'>
                        <img
                          src={img3}
                          alt=""
                          className=" h-40 object-cover md:h-48 lg:h-40"
                        />
                      </div>
                    <h1 className='text-center py-2 font-semibold text-2xl antonio opacity-70'>Sell a home</h1>
                    <div className="p-4">
                      <p>In general, the real estate industry does involve memberships and associations that professionals can join to gain access</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* new feature section */}
              <div className="realestate-feature lg:px-25 p-5 lg:p-10 py-20 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-10 items-center">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map((items)=>(
                            <div className='list shadow rounded' key={items}>
                  <div className="feature-image col-span-1 md:col-span-2">
                       <div>
                           <img src={img6} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                       </div>
                  </div>
                  <div className="feature-text col-span-1 p-2 lg:p-5">
                       <p className='text-2xl font-bold text-blue-600 py-3 antonio'>₹12,00000</p>
                       <h1 className='font-semibold text-center py-1 text-2xl antonio'>Beautiful Flat in Manhattan </h1>
                       <p className='py-1 opacity-65'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                        <div className='grid grid-cols-3 opacity-70'>
                             <div className='py-1 border-r-1 p-1'>
                                 <h1 className='text-lg flex items-center'>3 <IoBedOutline className='ms-1' /></h1>
                                 <p>Bedrooms</p>
                             </div>
                             <div className='py-1 border-r-1 p-1'>
                                 <h1 className='text-lg flex items-center'>3 <LuBath className='ms-1'/></h1>
                                 <p>Bathroom</p>
                             </div>
                             <div className='py-1 border-r-1 p-1'>
                                 <h1 className='text-lg flex items-center'>3 <FaVectorSquare className='ms-1' /></h1>
                                 <p>Square Fit</p>
                             </div>
                        </div>
                  </div>
                     <div className="button">
                        {/* animation button */}
                           <main className='p-3 flex justify-center items-center'>
                               <button className='py-2 px- w-full bg-amber-400 rounded-lg hover:bg-amber-300 hover:text-white'>Contact Now</button>
                           </main>
                     </div>
                   </div>
                      ))}
                </div>
              </div>
              {/* Our Aminities */}
              <div className="our-aminities p-5 lg:p-10">
                     <h1 className='text-center py-3'><span className='px-4 py-2 bg-orange-600 rounded text-white'>Our Aminities</span></h1>
                      <h1 className='text-center py-3 text-2xl xl:text-4xl font-bold antonio'>Building Aminities</h1>
                  <div className="container lg:px-25">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                                 <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                     <BiSolidCar className='text-5xl text-blue-600' />
                                 </div>
                            <div className="content">
                              <h1 className=' text-center text-2xl py-3 font-semibold antonio opacity-65'>Parking Space</h1>
                            </div>
                          </div>

                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                            <div className="content"></div>
                                     <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                         <PiSwimmingPool className='text-5xl text-blue-600' />
                                     </div>
                                <div className="content">
                                    <h1 className='text-center text-2xl py-3 font-semibold antonio opacity-65'>Swimming Pool</h1>
                                </div>
                               </div>
                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                                     <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                         <MdOutlineSecurity className='text-5xl text-blue-600' />
                                     </div>
                                     <div className="content">
                                          <h1 className='text-center text-2xl py-3 font-semibold antonio opacity-65'>Private Security</h1>
                                     </div>
                          </div>
                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                                     <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                         <GiMedicalPack className='text-5xl text-blue-600' />
                                     </div>
                                     <div className="content">
                                          <h1 className='text-center text-2xl py-3 font-semibold antonio opacity-65'>Medical Center</h1>
                                     </div>
                          </div>
                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                                     <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                         <IoLibraryOutline className='text-5xl text-blue-600' />
                                     </div>
                                     <div className="content">
                                          <h1 className='text-center text-2xl py-3 font-semibold antonio opacity-65'>Library Area</h1>
                                     </div>
                          </div>
                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                                     <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                         <MdOutlineKingBed  className='text-5xl text-blue-600' />
                                     </div>
                                     <div className="content">
                                          <h1 className='text-center text-2xl py-3 font-semibold opacity-65 antonio'>King Size Beds</h1>
                                     </div>
                          </div>
                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                                     <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                         <FaHouseCircleCheck  className='text-5xl text-blue-600' />
                                     </div>
                                     <div className="content">
                                          <h1 className='text-center text-2xl py-3 font-semibold opacity-65 antonio'>Smart Homes</h1>
                                     </div>
                          </div>
                          <div className='child shadow-xl p-4 flex flex-col items-center'>
                                     <div className='w-20 h-20 bg-amber-400 hover:bg-amber-300 flex justify-center items-center rounded-full'>
                                         <GiKidSlide  className='text-5xl text-blue-600' />
                                     </div>
                                     <div className="content">
                                          <h1 className='text-center text-2xl py-3 font-semibold opacity-65 antonio'>Kid's Playland</h1>
                                     </div>
                          </div>
                         </div>
                  </div>
              </div>
              {/*dream-house  */}
              <div className="dream-house-section lg:px-25 p-5 ">
                     <div className="md:flex">
                    <div className="w-full md:w-1/2 md:flex items-center">
                         <div className="p-3">
                             <h1 className='text-3xl antonio uppercase py-2 opacity-65'>beautiful future in dream house</h1>
                             <p>
             At DD Associates, we believe that every dream home is the beginning of a beautiful future.
We don’t just build walls and roofs — we build comfort, happiness, and lasting memories.
Our expert team designs homes that reflect your lifestyle, combining modern architecture, quality materials, and thoughtful planning.
                               </p>
                               <p className="pt-3">
                                From concept to completion, every detail is handled with care to ensure your dream home becomes a perfect space for your family’s future.
                               </p>
                         </div>
                    </div>
                    <div className="w-full md:w-1/2">
                          <div className="p-2">
                                <img src={img8} alt="dream house" className='rounded-se-4xl rounded-bl-4xl rounded' />
                          </div>
                    </div>
                       
                     </div>
              </div>
    </div>
  )
  }

export default RealEstate