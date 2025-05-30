import { useState, useEffect } from "react";

const Projects = () => {
        const [blog, useBlog] = useState([
            {
                id: 1,
                title: "ICTopia Website",
                image: "./images/logoICTopia.png",
                link:"https://ictopia.vercel.app",
                description: "Incubating, and Advocating for technology, through Tech Quizathon and ICT based competition"
            },
            {
                id: 2,
                title: "DervacHub Website",
                image: "./images/dervacHub.png",
                link:"https://hub.dervac.com",
                description: "A technical tranining program for tech enthusiast, to acquire skill across all technical feeds"
            },
            {
                id: 3,
                title: "Advice Generator",
                image: "./images/adviceGenerator.png",
                link:"https://advice-generator-app-by-azedkode.vercel.app/",
                description: "A website that generate random advice across differnt field of life, cool right!"
            },
            {
                id: 4,
                title: "Rock Paper Scissors",
                image: "./images/rock-paper-scissor.png",
                link:"https://rock-paper-scissors-by-azedcode.vercel.app/",
                description: "A game oriented website where you can play Rock Paper Scissors, it gives you access to the games rule before you start and records your scores"
            },
            {
                id: 5,
                title: "DrumKit",
                image: "./images/drumkit.png",
                link:"https://drum-kit-by-vector.vercel.app/",
                description: "A website that is both keyboard and text sensitive where you can drum and make several beats with your device"
            }
        ]);
        
    return (
        <>
        <div id="projects" className="bg-[#0a101e] w-full p-[1rem] md:p-[2rem] overflow-x-hidden">
            <div className="mx-auto md:w-[35rem] w-full h-fit  relative top-0 z-1" data-aos="fade-up" data-aos-duration="1400" data-aos-offset="200" data-aos-easing="ease-in-out">
                <h1 className="text-center md:text-[102px] text-[55px] text-[#101624] w-full font-bold h-full">PROJECTS</h1>
                <div className="absolute inset-0 mx-auto z-2 md:mt-[2.3rem] mt-[1.3rem]">
                    <div className="w-fit mx-auto flex flex-col md:gap-[0.5rem] gap-[0.2rem] items-center">
                        <h1 className="md:text-[25px] text-[15px] text-[#fec544] font-bold">PROJECTS</h1>
                        <div className="w-[10rem] h-[3px] bg-[#3f4551]"><p className="mx-auto w-[5rem] h-full bg-[#FFC848]"></p></div>
                    </div>
                </div>
            </div>
            <div className="contain mt-[2rem] flex items-center gap-[1rem] md:w-[250vw] w-[500vw] h-[40vh]">
            {blog.map((contents) => (
                <div key={contents.id} className="blog md:w-[50vw] w-full h-full bg-white cursor-pointer ">
                    <img className="flex w-full h-full" src={contents.image} alt="" />
                    <a href={contents.link}><div className="info items-center gap-[2rem] flex-col justify-center text-center p-[2rem]">
                        <h1 className="text-[25px] text-[#0a101e]">{contents.title}</h1>
                        <p className="text-[#0a101e] text-[20px]">{contents.description}</p>
                        <a href={contents.link} className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-[#0a101e]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0a101e" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></a>
                    </div></a>
                </div>
            ))}
            </div>
        </div>
        </>
    );
}
 
export default Projects;