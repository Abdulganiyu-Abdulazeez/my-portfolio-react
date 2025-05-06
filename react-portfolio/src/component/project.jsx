import { useState, useEffect } from "react";

const Projects = () => {
    const show = () => {
        const content = [
            {
                id: 1,
                title: "ICTopia Website",
                image: "./images/logoICTopia.png",
                link:"",
                description: "Incubating, and Advocating for technology, through Tech Quizathon and ICT based competition"
            },
            {
                id: 2,
                title: "DervacHub Website",
                image: "./images/dervacHub.png",
                link:"",
                description: "A technical tranining program for tech enthusiast, to acquire skill across all technical feeds"
            },
            {
                id: 3,
                title: "Advice Generator",
                image: "./images/adviceGenerator.png",
                link:"",
                description: "A website that generate random advice across differnt field of life, cool right!"
            },
            {
                id: 4,
                title: "Rock Paper Scissors",
                image: "./images/adviceGenerator.png",
                link:"",
                description: "A game oriented website where you can play Rock Paper Scissors, it gives you access to the games rule before you start and records your scores"
            },
            {
                id: 5,
                title: "DrumKit",
                image: "./images/adviceGenerator.png",
                link:"",
                description: "A website that is both keyboard and text sensitive where you can drum and make several beats with your device"
            }
        ]
    }
    return (
        <>
        <div id="projects" className="bg-[#0a101e] w-full p-[1rem] md:p-[2rem]">
            <div className="mx-auto md:w-[35rem] w-full h-fit  relative top-0 z-1">
                <h1 className="text-center md:text-[102px] text-[55px] text-[#101624] w-full font-bold h-full">PROJECTS</h1>
                <div className="absolute inset-0 mx-auto z-2 md:mt-[2.3rem] mt-[1.3rem]">
                    <div className="w-fit mx-auto flex flex-col md:gap-[0.5rem] gap-[0.2rem] items-center">
                        <h1 className="md:text-[25px] text-[15px] text-[#fec544] font-bold">PROJECTS</h1>
                        <div className="w-[10rem] h-[3px] bg-[#3f4551]"><p className="mx-auto w-[5rem] h-full bg-[#FFC848]"></p></div>
                    </div>
                </div>
            </div>
            <div  className="flex items-center overflow-hidden w-full h-[50%]">
            {
                content.map((content) => (
                    <div className={`w-full h-full bg-[url(${content.image})] hover:bg-[#0a101e]`}>
                        {/* <img className="hover:hidden flex" src={content.image} alt="" /> */}
                        <div className="none hover:visible flex items-center gap-[2rem] flex-cols">
                            <h1>{content.title}</h1>
                            <p>{content.description}</p>
                            <a href="#" className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-white absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></a>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </div>
        </>
    );
}
 
export default Projects;