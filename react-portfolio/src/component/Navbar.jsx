import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";


const Navbar = () => {
    const [hide, setHide] = useState("hidden");
    const [show, setShow] = useState("flex")
    const [viewWidth, setViewWidth] = useState(window.innerWidth);
    const [nav, setNav] = useState("hidden");
    const handleClick = () => {
        setHide("flex");
        setShow("hidden");
        setNav("flex");
       document.getElementById("mobile").style.display = "flex"
    }
    const clickAgain = () => {
        setHide("hidden");
        setShow("flex");
        setNav("hidden");
       document.getElementById("mobile").style.display = "none"
    }
    // new.express.adobe.com


    return (
        <>
            <div className="flex w-full h-[19vh] gap-[2rem] items-center justify-between bg-[#070d1b] p-[1rem] border-b-[1px] border-b-gray-700 relative">
                <div className="flex items-center gap-[0.5rem]">
                    <div className="rounded-[50%] border-[3px] border-solid border-[#fec544] w-[4rem] h-[4rem] p-[0.6rem] overflow-hidden flex items-center justify-center">
                        <img className="w-full h-full" src="./images/portfolio Logo.svg" alt="" />
                    </div>
                    <h1 className="text-[40px] text-white"><b><span className="text-[#fec544]">A</span>bdulazeez</b></h1>
                </div>
                <div className="window md:flex hidden md:static absolute top-[19vh] left-[0vw] z-10 md:flex-row flex-col items-center items-start md:gap-[2rem] gap-0 md:w-fit w-full bg-[#070d1b]">
                    <a href="#home" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Home</a>
                    <a href="#about" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">About</a>
                    <a href="#skill" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Skill</a>
                    <a href="#resume" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Resume</a>
                    <a href="#contact" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Contact</a>
                    <p className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:flex hidden">|</p>
                    <div className="flex items-center gap-[1rem] text-white md:flex hidden"><FontAwesomeIcon className="text-white" icon={faPhone} /><p className="text-[#ffc848]">+234 710233344</p></div>
                </div>
                <div id="mobile" className="window max-width(425px):flex hidden absolute top-[19vh] left-[0vw] z-10 flex-col items-start md:gap-[2rem] gap-0 md:w-fit w-full bg-[#070d1b]">
                    <a href="#home" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Home</a>
                    <a href="#about" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">About</a>
                    <a href="skill" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Skill</a>
                    <a href="#resume" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Resume</a>
                    <a href="#contact" className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:text-normal text-[20px]">Contact</a>
                    <p className="text-bold text-white md:w-fit w-full cursor-pointer hover:text-[#ffc848] md:font-normal font-bold md:p-0 p-[1rem] md:border-none border-b-[1px] border-gray-700 md:flex hidden">|</p>
                    <div className="flex items-center gap-[1rem] text-white md:flex hidden"><FontAwesomeIcon className="text-white" icon={faPhone} /><p className="text-[#ffc848]">+234 710233344</p></div>
                </div>
                <div className="items-center md:hidden flex">
                    <img className={show} src="../images/icon-hamburger.svg" onClick={handleClick} alt="" />
                    <img className={hide} onClick={clickAgain} src="../images/icon-close.svg" alt="" />
                </div>
            </div>
        </>
    );
}
// for other backgroundS: #0a101e
// for home bg: #070d1b
// for text background beside header: #101624
// for deep yellow: #fec544
// a bit light yellow: #FFC848

export default Navbar;
