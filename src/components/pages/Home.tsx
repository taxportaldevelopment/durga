import Carousel from "../feature/Carousel";
import CarouselSlider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import img1 from "../../assets/home/img-1.png";
import work1 from "../../assets/home/work-1.png";
import work2 from "../../assets/home/truck-img.gif";
import worker1 from "../../assets/home/worker.png";
import { HomeButton } from "../../buttons/HomeButton";
import ViewImage from "../../imagesSection/ViewImage";
// icons section
// import { useEffect, useRef, useState,} from "react";
import { AiFillBuild } from "react-icons/ai";
// service list images
import ser1 from "../../assets/services-img/img-1.png";
import ser2 from "../../assets/services-img/img-2.jpg";
import ser3 from "../../assets/services-img/img-3.jpg";
import ser4 from "../../assets/services-img/img-4.jpg";
import ser5 from "../../assets/services-img/img-5.png";
import ser6 from "../../assets/services-img/img-6.jpg";
import ser7 from "../../assets/services-img/img-7.jpg";
import ser8 from "../../assets/services-img/img-8.jpeg";
import ser9 from "../../assets/services-img/img-9.jpg";
import ser10 from "../../assets/services-img/img-10.jpg";
// multi scroll bar
import scroll1 from "../../assets/scroller/img-1.jpg";
import scroll2 from "../../assets/scroller/img-2.jpg";
import scroll3 from "../../assets/scroller/img-3.jpg";
import scroll4 from "../../assets/scroller/img-4.jpg";
import scroll5 from "../../assets/scroller/img-5.jpg";
import scroll6 from "../../assets/scroller/img-6.jpg";
// style apply
// const useScrollReveal = (options = { threshold: 0.2, rootMargin: "0px" }) => {
//   const ref = useRef<HTMLElement>(null);
//   const [isRevealed, setIsRevealed] = useState(false);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsRevealed(true);
//           // Stop observing once it's revealed
//           observer.unobserve(element);
//         }
//       });
//     }, options);

//     observer.observe(element);

//     // Cleanup function
//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//     };
//   }, [options]);

//   return { ref, isRevealed };
// };

/**
 * ScrollReveal Component: Wraps content and applies the animation when scrolled into view.
 */

// interface ScrollRevealProps {
//   children: ReactNode;
//   className?: string;
// }

// const ScrollReveal = ({ children, className = "" }: ScrollRevealProps) => {
//   const { ref, isRevealed } = useScrollReveal({
//     threshold: 0.2,
//     rootMargin: "",
//   });

//   const baseClasses = "scroll-reveal";
//   const revealedClass = isRevealed ? "revealed" : "";

//   return (
//     <section
//       ref={ref}
//       className={`${baseClasses} ${revealedClass} ${className}`}
//     >
//       {children}
//     </section>
//   );
// };

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    {
      src:ser1,
      title: "Plumbing Work",
      description:
        "Our skilled plumbers provide reliable installation and maintenance for all types of residential and commercial plumbing systems. From fitting new pipelines and bathroom fixtures to repairing leaks and ensuring proper water flow, we deliver high-quality workmanship with durable materials to keep your property running smoothly.",
    },
    {
      src:ser2,
      title: "Mechanical Work",
      description:
        "Our experienced mechanics handle the installation, repair, and maintenance of all construction machinery and equipment. We ensure every machine operates efficiently and safely, minimizing downtime and keeping your project on track.",
    },
    {
      src:ser3,
      title: "Electrical Work",
      description:
        "Our professional electricians handle all types of electrical installations, wiring, and maintenance for residential and commercial projects. We ensure safe, efficient, and reliable power systems for your construction site.",
    },
    {
      src:ser4,
      title: "Welding Work",
      description:
        "We specialize in professional welding services for construction projects, delivering strong, precise, and durable metal connections. Our team ensures quality workmanship and safety in every weld.",
    },
    {
      src:ser5,
      title: "Surveying Work",
      description:
        "Our expert surveyors provide accurate land measurement and site layout services to ensure every construction project starts with precise planning. We help maintain alignment, accuracy, and efficiency throughout the building process.",
    },
    {
      src:ser6,
      title: "Carpentry Work",
      description:
        "To skilled carpenters handle all types of woodwork, including formwork, framing, doors, and fittings. We deliver strong, precise, and high-quality finishes for residential and commercial construction projects.",
    },
    {
      src:ser7,
      title: "Building Work",
      description:
        "The experienced builders manage all stages of construction, from foundation to finishing. We ensure strong structures, quality workmanship, and timely project completion for every site.",
    },
    {
      src:ser8,
      title: "Painting Work",
      description:
        "Our professional painters provide high-quality interior and exterior painting services that enhance the look and durability of your building. We ensure smooth finishes, lasting colors, and attention to detail in every project.",
    },
    {
      src:ser9,
      title: "Driving Work",
      description:
        "skilled drivers operate construction vehicles and equipment safely and efficiently. We ensure timely material transport and smooth on-site operations to keep your project running without delays.",
    },
    {
      src:ser10,
      title: "Roofing Work",
      description:
        "expert roofers handle all types of roofing installation, repair, and maintenance. We ensure strong, weather-resistant, and long-lasting roofs that protect your building and enhance its appearance.",
    },
  ];

  const scrollBar:string[] = [scroll1,scroll2,scroll3,scroll4,scroll5,scroll6];

  return (
    <div>
      {/* carousel start */}
      <Carousel />
      {/* carousel end */}
      {/* introduction */}
      <div className="container mx-auto p-4 bg-gray-100">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/2 flex items-center justify-center p-6 xl:p-10">
            <div>
              <h1 className="product-font text-2xl md:text-3xl lg:text-4xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                We're Building Everything Best That You
                <span className="text-yellow-300"> Needed!</span>
              </h1>
              <h1 className="py-3 capitalize">
                building Dreams, Creating Landmarks
              </h1>
              <p className="py-2 text-sm md:text-base merriweather opacity-70">
                Welcome to <strong><i>DD Associates</i></strong>, your reliable partner
                for all construction and real estate needs in Chennai. With
                years of expertise, we specialize in residential, commercial,
                and industrial projects — ensuring every structure we build
                reflects strength, style, and sustainability. Whether you’re
                planning to build your dream home or invest in premium
                properties, DD Associates is committed to turning your vision
                into reality.
              </p>
              {/* <HomeButton/> */}
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
        <h1 className="text-2xl font-bold text-center my-4 antonio">
          Our Services
        </h1>
        <h1 className="text-center text-3xl uppercase antonio">
          High Quality Construction Solutions <br />
          For Residentials &{" "}
          <span className="text-yellow-300">Industries!</span>
        </h1>
        {/* i want three cards here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-36 py-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden "
            >
              <div className="home-slider">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 py-3">
                  {image.title}
                </h2>
                <p className="text-gray-600 text-sm py-3">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* our projects */}
      <div className="projects text-wh">
        <h1 className="text-2xl font-bold text-center my-4 antonio p-10 text-yellow-200">
          Our Projects
        </h1>
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4 lg:px-28 py-10 some-facts">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold antonio text-white">
              Transforming The Ideas And Visions <br /> For{" "}
              <span className="text-yellow-300">Industries!</span>
            </h1>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-white">
              Construction is a general term meaning the art and science to form
              objects systems organizations.
            </p>
            <div className="py-10">
              <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Some Facts */}
        <div className="px-4 lg:px-28 flex flex-col lg:flex-row gap-4 py-10 bg-white ">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-2xl font-bold  my-4 antonio">Some Facts</h1>
            <h1 className=" text-3xl uppercase antonio py-2">
              Delivering The Most Innovation{" "}
              <span className="text-yellow-300">Goals.</span>
            </h1>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* grid use 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-yellow-300 antonio">
                  100+
                </h1>
                <p className="text-lg">Projects Done</p>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold text-yellow-300 antonio">
                  50+
                </h1>
                <p className="text-lg">Happy Clients</p>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold text-yellow-300 antonio">
                  25+
                </h1>
                <p className="text-lg">Awards Won</p>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold text-yellow-300 antonio">
                  10+
                </h1>
                <p className="text-lg">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-32 py-10">
          <CarouselSlider
            responsive={responsive}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            arrows={true}
            renderButtonGroupOutside={true}
            dotListClass="my-3"
          >
            {scrollBar.map((image, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden my-1 mx-1 sm:mx-2"
              >
                <img
                  src={image}
                  alt={"img"}
                  className="w-full h-32 sm:h-40 md:h-60 object-cover"
                />
                {/* <div className="p-2 sm:p-4 text-center">
                  <h2 className="text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2 py-1">
                    {image.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm py-5">
                    {image.description}
                  </p>
                </div> */}
              </div>
            ))}
          </CarouselSlider>
        </div>
      </div>
      {/* expert worker */}
      {/* <ScrollReveal className='p-4'></ScrollReveal> */}

      <div className="expert-workers ">
        {/* left side content and right site image*/}
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4 lg:px-28 py-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold antonio">
              Meet Our Expert Workers
            </h1>
            <p className="text-lg py-4">
Our team is made up of skilled and dedicated professionals who bring years of experience to every project. From builders and electricians to plumbers and carpenters, each member is committed to delivering quality workmanship, safety, and excellence on every construction site.
            </p>
            <HomeButton />
          </div>
          <div className="w-full lg:w-1/2">
            <img src={work1} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* left side content and right site image*/}
      </div>
      {/* </ScrollReveal> */}
      <div className="expert-worker ">
        {/* left side content and right site image*/}
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4 lg:px-28 py-10">
          <div className="w-full lg:w-1/2">
            <img src={work2} alt="" className="w-full h-auto rounded-r-xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold antonio">
             🦺 Site Supervisor
            </h1>
            <p className="text-lg py-4">
 Site supervisors play a key role in managing and monitoring all on-site construction activities.
They ensure that every task is completed according to plan, schedule, and safety standards.
With strong leadership skills, they coordinate workers, subcontractors, and suppliers efficiently.
They maintain smooth communication between the project manager and on-site teams.
Every step — from groundwork to finishing — is carefully checked for quality and accuracy.
Supervisors make sure materials and equipment are used properly to avoid waste or delays.
They focus on safety first, ensuring all workers follow construction and site regulations.
Progress reports and updates are maintained regularly to track the project’s timeline.
Their hands-on experience helps solve on-site challenges quickly and effectively.
With their dedication and expertise, every construction project runs safely and successfully.
            </p>
          </div>
        </div>
        {/* left side content and right site image*/}
      </div>
      {/* gallery start */}

      <div className="gallery py-5">
        <h1 className="text-3xl font-bold text-center my-4 antonio p-10 text-yellow-200">
          Gallery
        </h1>
        <ViewImage />
      </div>
      {/* gallery end */}
      {/* WHAT WE OFFER START */}
      <div className="what-we-offer py-5 px-1 lg:p-10">
        <h1 className="text-3xl font-bold text-center my-4 antonio p-10 text-yellow-200">
          What We Offer
        </h1>
        <p className="text-lg text-center py-2">
          We provide a wide range of construction services to meet your needs.
        </p>

        <div className="lg:flex slide-in-container">
          <div className="w-full lg:w-1/1 lg:p-2">
            {/* i want grid system use two row and tow column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div className="flex gap-4 p-4 items-center">
                <div className="icon flex items-center justify-center border rounded-full bg-yellow-300 text-white w-16 h-16 min-w-[4rem] min-h-[4rem]">
                  <AiFillBuild className="text-3xl sm:text-5xl p-1" />
                </div>
                <div className="details flex-1">
                  <h1 className="text-lg font-bold antonio">
                    Simple and Professional
                  </h1>
                  <p className="text-md">
                      We provide a wide range of construction services to meet all your building and project needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <div className="icon flex items-center justify-center border rounded-full bg-yellow-300 text-white w-16 h-16 min-w-[4rem] min-h-[4rem]">
                  <AiFillBuild   className="text-3xl sm:text-5xl p-1" />
                </div>
                <div className="details flex-1">
                  <h1 className="text-lg font-bold antonio">
                    Short and Catchy
                  </h1>
                  <p className="text-md">
                      From design to delivery, we offer complete construction solutions tailored to you.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <div className="icon flex items-center justify-center border rounded-full bg-yellow-300 text-white w-16 h-16 min-w-[4rem] min-h-[4rem]">
                  <AiFillBuild className="text-3xl sm:text-5xl p-1" />
                </div>
                <div className="details flex-1">
                  <h1 className="text-lg font-bold antonio">
                    Modern and Engaging
                  </h1>
                  <p className="text-md">
                      We deliver a full spectrum of construction services designed to match your vision and goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <div className="icon flex items-center justify-center border rounded-full bg-yellow-300 text-white w-16 h-16 min-w-[4rem] min-h-[4rem]">
                  <AiFillBuild className="text-3xl sm:text-5xl p-1" />
                </div>
                <div className="details flex-1">
                  <h1 className="text-lg font-bold antonio">
                    Website Section Heading Style
                  </h1>
                  <p className="text-md">
                     At our company, we offer reliable and comprehensive construction services to bring your projects to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative hidde lg:block">
            <img src={worker1} alt="" className=" h-auto" />
            <div className="styles h-20 bg-linear-to-r from-cyan-500 to-blue-500 rounded-ss-4xl rounded-br-4xl absolute -bottom-4 lg:bottom-0 left-0 right-0 -rotate-4">
              <h1 className="text-lg font-bold antonio flex justify-center items-center text-white">
                {" "}
                TEAM WORKER{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* WHAT WE OFFER END */}
    </div>
  );
};

export default Home;
