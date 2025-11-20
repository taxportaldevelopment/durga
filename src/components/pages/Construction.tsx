import logo from "../../assets/logo.png";
import img1 from "../../assets/construction/1.jpg";
import img2 from "../../assets/construction/2.jpg";
import img3 from "../../assets/construction/img-1.jpg";
import img4 from "../../assets/construction/2.png";
import video from "../../assets/construction/video.mp4";
// icons
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { RiCompasses2Fill } from "react-icons/ri";
import { CiTrophy } from "react-icons/ci";
import { PiPencilSimpleLine ,PiStrategy} from "react-icons/pi";
import { Link } from "react-router-dom";
const Construction = () => {
  return (
    <div>
        <div className="construction-banner p-5 lg:px-25">
             <div className='flex items-center h-full'>
                   <div>
                            <div className='flex items-center'>
                       <img src={logo} className='h-20' alt="logo" />
                       <h1 className='ms-2 text-3xl text-white font-semibold '>ASSOCIATES</h1>
                  </div>
                       <h1 className='py-3 text-white text-3xl font-bold'><i className='antonio'>CONSTRUCTION <span className='text-yellow-300'>WORK</span></i></h1>
                   </div>
             </div>
        </div>
        {/* let introduction */}
        <div className="let-intro p-4 lg:px-25 bg-gray-200">
              <div className="lg:flex"> 
                <div className="w-full p-2">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                          <div className="layer">
                               <div className="image">
                                     <div className="p-2 bg-white">
                                          <img src={img1} alt="construction site" className='' />
                                     </div>
                               </div>
                               <div className="content p-2">
                                      <h1 className='py-4 text-2xl antonio'>Construction</h1>
                                      <div className='h-1 w-20 bg-amber-600'></div>
                                      <p className='py-2'>
                                        We specialize in residential, commercial, and industrial construction, delivering high-quality projects with modern designs and reliable workmanship.
                                        </p>
                               </div>
                          </div>
                          <div className="layer">
                               <div className="image">
                                    <div className='p-2 bg-white'>
                                         <img src={img2} alt="construction site" className='bg-white' />
                                    </div>
                               </div>
                               <div className="content p-2">
                                      <h1 className='py-4 text-2xl antonio'>Construction</h1>
                                      <div className='h-1 w-20 bg-amber-600'></div>
                                      <p className='py-2'>
                                        With a skilled team and a commitment to excellence, DD Associates ensures every project is completed on time and within budget.
                                        </p>
                               </div>
                          </div>
                     </div>
                </div>
                 <div className="w-full p-3">
                     <main>
                          <h1 className='text-3xl py-2 font-semibold'>Welcome to ConstructPress</h1>
                          <p className='py-2'>
                              DD Associates is a trusted construction company based in Chennai, Tamil Nadu, dedicated to building strong, safe, and beautiful spaces.</p>
                          <ul className='opacity-65'>
                               <li className='flex items-center py-2'><FaRegArrowAltCircleRight className='me-2' /> Interior design Package</li>
                               <li className='flex items-center py-2'><FaRegArrowAltCircleRight className='me-2' /> Reparing of Residentail Roof</li>
                               <li className='flex items-center py-2'><FaRegArrowAltCircleRight className='me-2' /> Hardwood Flooring</li>
                               <li className='flex items-center py-2'><FaRegArrowAltCircleRight className='me-2' /> Renovaion of Commercial Office</li>
                               <li className='flex items-center py-2'><FaRegArrowAltCircleRight className='me-2' /> Make Quality Products</li>
                          </ul>
                     </main>
                 </div>
              </div>
        </div>
        {/* Services that we offers */}
        <div className="services-offer p-2 lg:px-25">
             <h1 className='py-3 text-2xl antonio'>Services that we offers</h1>
             <div className='h-1 bg-amber-400 w-14'></div>
              <div className='lg:flex'> 
                 <div className='w-full lg:w-1/3'>
                     <div className='p-3'>
                          <ul className=' uppercase p-2 opacity-65 font-semibold'>
                              <li className='py-2 border'><span className='p-1 me-1 bg-amber-500'></span> Building Construction</li>
                              <li className='py-2 border'><span className='p-1 me-1 bg-amber-500'></span> Building Renovation</li>
                              <li className='py-2 border'><span className='p-1 me-1 bg-amber-500'></span> Interior Design package</li>
                              <li className='py-2 border'><span className='p-1 me-1 bg-amber-500'></span> Isolation</li>
                              <li className='py-2 border'><span className='p-1 me-1 bg-amber-500'></span> Roof Repairing</li>
                              <li className='py-2 border'><span className='p-1 me-1 bg-amber-500'></span> architecture consulting</li>
                              <li className='py-2 border'><span className='p-1 me-1 bg-amber-500'></span> building maintenance</li>
                          </ul>
                     </div>
                 </div>
                 <div className='w-full p-2'>
                     <div className="flex p-2 gap-4">
                          <div className="w-full">
                             <div>
                                 <p className='py-5 opacity-65'>At DD Associates, we provide complete building construction services designed to meet your vision and budget.
From planning and design to execution and finishing, we handle every step with care, quality, and precision.
Our team of skilled engineers, architects, and workers ensures that each building is strong, safe, and built to last.</p>
                             </div>
                             <div className="lg:flex mt-3 gap-2">
                                 <div className="w-full lg:w-1/2">
                                     <img src={img3} alt="" />
                                 </div>
                                 <div className="w-full lg:w-1/2 opacity-65">
                                    <ul>
                                        <li className='flex items-center py-1'><FaRegArrowAltCircleRight className='me-2 text-orange-400'/> Natus erroroluptatem</li>
                                        <li className='flex items-center py-1'><FaRegArrowAltCircleRight className='me-2 text-orange-400'/> Accusantium doloremue</li>
                                        <li className='flex items-center py-1'><FaRegArrowAltCircleRight className='me-2 text-orange-400'/> Laudantium unde</li>
                                        <li className='flex items-center py-1'><FaRegArrowAltCircleRight className='me-2 text-orange-400'/> Natus error sit volupta</li>
                                        <li className='flex items-center py-1'><FaRegArrowAltCircleRight className='me-2 text-orange-400'/> Accusantium dolor</li>
                                    </ul>
                                 </div>
                             </div>
                          </div>
                          <div className="w-1/2">
                             <img src={img4} alt="construction"  className='h-auto lg:h-96'/>
                          </div>
                     </div>
                 </div>
              </div>
        </div>
        {/* video-section */}
        <div className="video-section p-3 lg:px-25">
              <div className="lg:flex">
                   <div className="w-full lg:w-1/2">
                      <div>
                           <video src={video} controls autoPlay muted controlsList="nodownload"></video>
                      </div>
                   </div>
                   <div className="w-full lg:w-1/2">
                         <div className="p-2 lg:px-10">
                               <h1 className='py-2 text-3xl'>Checkout our video for featured work</h1>
                               <p className='py-2'>
Take a closer look at our featured construction projects through this video showcase.
At DD Associates, every project tells a story of quality, creativity, and craftsmanship.
From elegant homes to modern commercial spaces, our work reflects dedication and attention to detail.
Watch the video to see how we transform ideas into beautiful, lasting structures that inspire trust and pride.                                   </p>
     <div className='py-4'>
          <Link to={"/contact"}>
             <button
  className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >CONTACT US</span >
              </button> 
          </Link>

                               </div>
                         </div>
                   </div>
              </div>
        </div>
        {/* construction-contact-us */}
         <div className="construction-contact-us p-5 lg:py-7 lg:px-25">
             <div className="p-2">
                  <h1 className='py-4 text-3xl font-semibold text-white'>Great Construction Company</h1>
                  <p className='py-2 italic text-xl'>If you have any construction and renovation work need, simply
                   call our 24 <br /> hour emergency number.</p>
              <div className='flex items-center lg:text-2xl'>
                <FaPhone />
                <h1 className='ms-3 font-bold'>+91 73 38 98 06 46</h1>
              </div>
             </div>
         </div>
         {/* CERTIFICATION */}
         <div className="container construction-certification p-2 lg:p-4 py-7 lg:px-30">
               <h1 className='text-center font-semibold text-2xl antonio'>CERTIFICATION</h1>
               <p className='text-center py-5 font-sans'>Embedded in our culture of hard work, honesty, and getting the well done job,</p>
              <div className="grid grid-cols-2  lg:grid-cols-3 p-">

                   <div className='flex justify-center p-1 lg:p-3 border-r border-b'>
                       <div>
                             <div className="icons flex justify-center">
                                <div>
                                         <div className='flex justify-center'>
                                              <BsTools className='text-4xl text-yellow-300' />
                                         </div>
                                <h2 className='lg:py-5 py-1 font-extralight text-sm lg:text-2xl'>SAFETY</h2>
                                </div>
                         </div>
                         <p className='font-extralight text-center'>We follow strict safety standards and guidelines to protect our workers, clients, and the environment.
Our team is trained in proper safety practices, and we ensure that all equipment and materials meet high-quality safety requirements.</p>

                       </div>
                   </div>
                   <div className='flex justify-center p-1 lg:p-3 border-b'>
                       <div>
                             <div className="icons flex justify-center">
                                <div>
                                         <div className='flex justify-center'>
                                              <FaRecycle className='text-4xl text-yellow-300' />
                                         </div>
                                <h2 className='py-1 lg:py-5 font-extralight text-sm lg:text-2xl'>COMMUNITY</h2>
                                </div>
                         </div>
                         <p className='font-extralight'>
                              We are proud to contribute to the growth and development of the neighborhoods where we work.
Our projects are designed to create safe, comfortable, and sustainable spaces that bring people together.
                              </p>

                       </div>
                   </div>
                   <div className='flex justify-center p-1 lg:p-3 border-l border-b'>
                       <div>
                             <div className="icons flex justify-center">
                                <div>
                                         <div className='flex justify-center'>
                                              <RiCompasses2Fill className='text-4xl text-yellow-300' />
                                         </div>
                                <h2 className='py-1 lg:py-5 font-extralight text-sm lg:text-2xl'>SUSTAINABILITY</h2>
                                </div>
                         </div>
                         <p className='font-extralight'>
                              Our goal is to create buildings that are not only beautiful and durable but also responsible toward nature.
We carefully plan every project to minimize waste, conserve resources, and promote green living environments.
                         </p>

                       </div>
                   </div>
                   <div className='flex justify-center p-1 lg:p-3 border-r'>
                       <div>
                             <div className="icons flex justify-center">
                                <div>
                                         <div className='flex justify-center'>
                                              <CiTrophy className='text-4xl text-yellow-300' />
                                         </div>
                                <h2 className='py-1 lg:py-5 font-extralight text-sm lg:text-2xl'>BEST QUALITY</h2>
                                </div>
                         </div>
                         <p className='font-extralight text-center'>From the materials we choose to the workmanship we deliver, every step reflects our commitment to excellence.
We follow strict quality control standards to ensure every project meets the highest level of safety, strength, and design.</p>

                       </div>
                   </div>
                   <div className='flex justify-center p-1 lg:p-3'>
                       <div>
                             <div className="icons flex justify-center">
                                <div>
                                         <div className='flex justify-center'>
                                              <PiPencilSimpleLine className='text-4xl text-yellow-300' />
                                         </div>
                                <h2 className='py-5 font-extralight text-2xl'>INTEGRITY</h2>
                                </div>
                         </div>
                         <p className='font-extralight'>We believe in conducting every project with honesty, transparency, and fairness.
From planning to completion, we maintain open communication with our clients and partners to ensure trust at every stage.</p>

                       </div>
                   </div>
                   <div className='flex justify-center p-1 lg:p-3 border-l sm:border-t'>
                       <div>
                             <div className="icons flex justify-center">
                                <div>
                                         <div className='flex justify-center'>
                                              <PiStrategy className='text-4xl text-yellow-300' />
                                         </div>
                                <h2 className='py-5 font-extralight text-2xl'>STRATEGY</h2>
                                </div>
                         </div>
                         <p className='font-extralight'>pork sirloi loine beefb andoe uillen uillen capicola swine a kevin mignon tritip picolakevin mignon tritip picola kevinsdertand filet mignon</p>

                       </div>
                   </div>

              </div>
         </div>
    </div>
  )
}

export default Construction
