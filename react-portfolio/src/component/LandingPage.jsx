import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
const LandingPage = () => {
    return ( 
        <>
            <div className="w-full h-full">
                <Navbar />
                <div className="flex items-center w-full bg-[#070d1b] relative">
                    <div className="w-[50%] h-screen flex flex-col gap-[1rem] py-[4rem] px-[2rem] ">
                        <h1 className="font-bold text-[30px] text-[#ffc848]">Hello, I am</h1>
                        <div className="font-bold text-[90px] leading-[7rem] text-white">Abdulganiyu Abdulazeez</div>
                        <div className="text-gray-500 text-[35px]">Web Developer</div>
                        <a href="#" className="rounded-[25px] p-[4rem] py-[0.8rem] font-bold text-[#070d1b] hover:text-[#ffc848] bg-[#ffc848] hover:bg-[#070d1b] w-fit border-[1px] border-[#ffc848] transition-all duration-300">Hire Me</a>
                    </div>
                    <div className="relative w-[50%] h-screen">
                        <div className="w-[50rem] absolute bottom-[0%] left-[-99%] z-1 flex items-center gap-[2rem] rounded-tl-[45px] rounded-bl-[45px] p-[1rem] border-[1px] border-solid border-gray-700 w-full h-fit bg-[#101624]">
                            <a href="https://www.twitter.com/Abdulaz94349364" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center p-[1rem]" icon={faTwitter}/></a>
                            <a href="https://api.whatsapp.com/send?phone=2347010233344" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center p-[1rem]" icon={faWhatsapp}/></a>
                            <a href="https://github.com/Abdulganiyu-Abdulazeez" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center p-[1rem]" icon={faGithub}/></a>
                            <a href="https://www.instagram.com/abdulganiyu4252/" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center p-[1rem]" icon={faInstagram}/></a>
                        </div>
                        <img className="right-0 absolute w-full h-screen" src="../src/assets/images/blog3-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        
        </>  
     );
}
 
export default LandingPage;