import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/about/group-of-construction-engineer-working-in-CK8QLJY.jpg";
import img2 from "../../assets/about/under-construction-PU92FX4.jpg";
import img3 from "../../assets/about/engineer-foreman-and-worker-discussing-in-RD63MB5.jpg";
import icons1 from "../../assets/about/icons/hook.png";
import icons2 from "../../assets/about/icons/worker.png";
import icons3 from "../../assets/about/icons/process.png";

const progressData = [
    { label: "Engineering", value: 90 },
    { label: "Construction", value: 75 },
    { label: "Renovations", value: 75 },
];

const AnimatedProgressBar: React.FC<{ value: number }> = ({ value }) => {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let start = 0;
        const step = () => {
            start += 2;
            if (start <= value) {
                setWidth(start);
                requestAnimationFrame(step);
            } else {
                setWidth(value);
            }
        };
        step();
    }, [value]);

    return (
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div
                ref={ref}
                className="bg-orange-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${width}%` }}
            ></div>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <div className="about-home-banner flex items-center">
                <div className="lg:ps-20 p-10">
                    <h1 className="text-white text-4xl font-bold pt-36 py-2 product-font">About Us</h1>
                    <span className="border-l-2 border-amber-200 inline-block pl-4">
                        <p className="text-white antonio first-letter:text-2xl ">
                            Specializing in New Home Construction
                        </p>
                    </span>
                </div>
            </div>
            <div className="about-home-content lg:p-12">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 px-4 py-4 flex justify-center items-center">
                        <img
                            src={img1}
                            alt="About Us"
                            className="w-full max-w-xl h-auto rounded-md shadow-md object-cover"
                            style={{ maxHeight: "600px" }}
                        />
                    </div>
                    <div className="lg:w-1/2 px-4 py-4">
                        <h2 className="border-l-2 border-amber-200 inline-block pl-4">
                            <p className="antonio first-letter:text-2xl text-blue-900">Our Introduction</p>
                        </h2>
                        <h1 className="font-bold text-3xl py-2">We're ready to share our experience</h1>
                        <p className="py-2">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don’t look even slightly believable.
                            Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </p>
                        <h1 className="font-bold text-3xl py-2">John Smith</h1>
                        <img
                            src={img2}
                            alt="Under Construction"
                            className="w-full  h-auto rounded-md shadow-md object-cover mt-4"
                        />
                    </div>
                </div>
            </div>
            {/* project completion section */}
            <div className="project-completion py-6 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6">
                    <div className="flex justify-center items-center border rounded-lg bg-white shadow-sm">
                        <div className="w-full">
                            <div className="border border-amber-200 bg-orange-500 text-white p-6 sm:p-10 rounded-lg text-center">
                                <h1 className="font-semibold text-lg sm:text-xl">Numbers speak For everything</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <div className="border-l-2 border-amber-200 pl-4 flex flex-col items-center">
                                <img src={icons1} alt="" className="w-12 h-12 mb-2" />
                                <h1 className=" lg:text-3xl font-medium md:text-xs">2000</h1>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <div className="border-l-2 border-amber-200 pl-4 flex flex-col items-center">
                                <img src={icons2} alt="" className="w-12 h-12 mb-2" />
                                <h1 className=" lg:text-3xl font-medium md:text-xs">2000</h1>
                                <p>Working Hours</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <div className="border-l-2 border-amber-200 pl-4 flex flex-col items-center">
                                <img src={icons3} alt="" className="w-12 h-12 mb-2" />
                                <h1 className=" lg:text-3xl font-medium md:text-xs">2000</h1>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerr p-4 lg:p-10 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
                    <div>
                        <h2 className="py-2 text-xl lg:text-lg antonio opacity-70">Our Services</h2>
                        <h1 className="text-2xl lg:text-3xl uppercase">We can design and build your dream home</h1>
                        <span>
                            <p className="py-3 text-base lg:text-lg">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don’t look even slightly believable.
                            </p>
                        </span>
                        {/* progress bar */}
                        <div className="py-2">
                            {progressData.map((item) => (
                                <div className="mb-4" key={item.label}>
                                    <div className="flex justify-between mb-1 py-2">
                                        <span>{item.label}</span>
                                        <span>{item.value}%</span>
                                    </div>
                                    <AnimatedProgressBar value={item.value} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img src={img3} alt="" className="w-full max-w-md h-auto rounded-md shadow-md object-cover" />
                </div>
            </div>
        </div>
    );
};

export default About;