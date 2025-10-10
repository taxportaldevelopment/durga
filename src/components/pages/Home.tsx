import React from 'react'
import Header from '../layout/Header'
import Carousel from '../feature/Carousel';
import CarouselSlider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import img1 from '../../assets/home/img-1.png';
import img2 from '../../assets/home/img-2.jpg';
import work1 from '../../assets/home/work-1.png';
import work2 from '../../assets/home/truck-img.gif';
import { HomeButton } from '../../buttons/HomeButton';

const Home = () => {

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  const images  =[
    { src: img2, title: 'Automobile & Manufacturing',description:"We produce positive results from growing Industrial estates, we have established a corporate or mandate to maintain the manufacturing economy." },
    { src: img2, title: 'Mechanical Engineering',description:"We produce positive results from growing Industrial estates, we have established a corporate or mandate to maintain the manufacturing economy." },
    { src: img2, title: 'Oil Gas & Power Plant',description:"We produce positive results from growing Industrial estates, we have established a corporate or mandate to maintain the manufacturing economy." },
  ];

  return (
    <div>
        {/* header start */}
           <Header/>
        {/* header end */}
        {/* carousel start */}
              <Carousel/>
        {/* carousel end */}
        {/* introduction */}
         <div className='container mx-auto p-4 bg-gray-100'>
   
                <div className="flex flex-col xl:flex-row">
                    <div className="w-full xl:w-1/2 flex items-center justify-center p-6 xl:p-10">
                        <div>
                            <h1 className="product-font text-2xl md:text-3xl lg:text-4xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                                We're Building Everything Best
                                That You
                                <span className="text-yellow-300"> Needed!</span>
                            </h1>
                            <p className="py-2 text-sm md:text-base">
                                Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun is construction.
                            </p>
                             <HomeButton/>
                            {/* <button className="bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded"> Get Started </button> */}
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 flex items-center justify-center p-6 xl:p-10">
                        <img src={img1} alt="" className="w-full h-auto max-w-md" />
                    </div>
                </div>
         </div>
         {/* Our Services */}
         <div className="service">
            <h1 className="text-2xl font-bold text-center my-4 antonio">Our Services</h1>
            <h1 className="text-center text-3xl uppercase antonio">High Quality Construction Solutions <br />For Residentials & <span className='text-yellow-300'>Industries!</span></h1>
            {/* i want three cards here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-36 py-4">
             {
                images.map((image, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden ">
                        <div className='home-slider'>
                             <img src={image.src} alt={image.title} className="w-full h-60 object-cover" />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 py-3">{image.title}</h2>
                            <p className="text-gray-600 text-sm py-3">{image.description}</p>
                        </div>
                    </div>
                ))
             }

            </div>
         </div>
         {/* our projects */}
         <div className="projects">
            <h1 className="text-2xl font-bold text-center my-4 antonio p-10 text-yellow-200">Our Projects</h1>
            <div className='container mx-auto p-4 flex flex-col lg:flex-row gap-4 lg:px-28 py-10 some-facts'>
                 <div className="w-1/2">
                     <h1 className='text-2xl font-bold antonio'>Transforming The Ideas And Visions <br /> For <span className='text-yellow-300'>Industries!</span></h1>
                 </div>
                 <div className="w-1/2">
                   <p className='text-lg'>Construction is a general term meaning the art and science to form objects systems organizations.</p> 
                   <div className='py-10'>
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
    >Get Started</span >
                       </button>         
                   </div>


               </div>
            </div>
            {/* Some Facts */}
           <div className='px-4 lg:px-28 flex flex-col lg:flex-row gap-4 py-10 bg-white '>
               <div className="w-1/2">
            <h1 className='text-2xl font-bold  my-4 antonio'>Some Facts</h1>
            <h1 className=' text-3xl uppercase antonio py-2'>
                Delivering The Most Innovation <span className='text-yellow-300'>Goals.</span>
            </h1>
               </div>
               <div className="w-1/2">
                 {/* grid use 4 columns */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-10'>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-yellow-300 antonio'>100+</h1>
                            <p className='text-lg'>Projects Done</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-yellow-300 antonio'>50+</h1>
                            <p className='text-lg'>Happy Clients</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-yellow-300 antonio'>25+</h1>
                            <p className='text-lg'>Awards Won</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-yellow-300 antonio'>10+</h1>
                            <p className='text-lg'>Years Experience</p>
                        </div>
                    </div>
               </div>
           </div>
            <div className='container mx-auto px-32 py-10'>
                <CarouselSlider
                    responsive={responsive}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false}
                    renderButtonGroupOutside={true}
                >
                    {images.map((image, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden mx-2">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-40 object-cover sm:h-60"
                            />
                            <div className="p-4 text-center">
                                <h2 className="text-base sm:text-xl font-semibold mb-2 py-1">{image.title}</h2>
                                <p className="text-gray-600 text-xs sm:text-sm py-1">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </CarouselSlider>
            </div>
         </div>
                     {/* expert worker */}
            <div className="expert-worker ">
                  {/* left side content and right site image*/}
                    <div className='container mx-auto p-4 flex flex-col lg:flex-row gap-4 lg:px-28 py-10'>
                        <div className="w-1/2">
                            <h1 className='text-2xl font-bold antonio'>Meet Our Expert Workers</h1>
                            <p className='text-lg py-4'>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun is construction.</p>
                            <p className='text-lg py-4'>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun is construction.</p>
                            <HomeButton/>
                        </div>
                        <div className="w-1/2">
                            <img src={work1} alt="" className='w-full h-auto'/>
                        </div>
                    </div>
            {/* left side content and right site image*/}
            </div>
            <div className="expert-worker ">
                  {/* left side content and right site image*/}
                    <div className='container mx-auto p-4 flex flex-col lg:flex-row gap-4 lg:px-28 py-10'>
                        <div className="w-1/2">
                            <img src={work2} alt="" className='w-full h-auto'/>
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-2xl font-bold antonio'>Meet Our Expert Workers</h1>
                            <p className='text-lg py-4'>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun is construction.</p>
                            <p className='text-lg py-4'>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun is construction.</p>
                        </div>
                    </div>
            {/* left side content and right site image*/}
            </div>

    </div>
  )
}

export default Home