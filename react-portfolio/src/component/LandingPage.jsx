import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const LandingPage = () => {
    return (
        <>
            <div className="w-full h-full">
                <Navbar />
                <div id="home" className="flex items-center w-full bg-[#070d1b] relative">
                    <div className="md:w-[50%] w-full h-screen flex flex-col md:items-start items-center gap-[1rem] py-[4rem] pl-[2rem] md:pr-0 pr-[2rem]">
                        <h1 className="font-bold text-[30px] text-[#ffc848]">Hello, I am</h1>
                        <div className="font-bold lg:text-[90px] md:text-[70Ppx] text-[60px] md:leading-[7rem] leading-[4rem] text-white">Abdulganiyu Abdulazeez</div>
                        <div className="text-gray-500 text-[35px]">Web Developer</div>
                        <a href="#" className="rounded-[25px] p-[4rem] py-[0.8rem] font-bold text-[#070d1b] hover:text-[#ffc848] bg-[#ffc848] hover:bg-[#070d1b] w-fit border-[1px] border-[#ffc848] transition-all duration-300">Hire Me</a>
                        <div className="w-full md:absolute static bottom-0 flex items-center gap-[2rem] rounded-l-[45px] md:rounded-r-0 rounded-r-[45px] p-[1rem] border-[1px] border-solid border-gray-700 h-fit bg-[#101624]">
                            <a href="https://www.twitter.com/Abdulaz94349364" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center md:p-[1rem] p-[0.75rem]" icon={faTwitter} /></a>
                            <a href="https://api.whatsapp.com/send?phone=2347010233344" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center md:p-[1rem] p-[0.75rem]" icon={faWhatsapp} /></a>
                            <a href="https://github.com/Abdulganiyu-Abdulazeez" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center md:p-[1rem] p-[0.75rem]" icon={faGithub} /></a>
                            <a href="https://linkedin.com/in/abdulazeez-abdulganiyu-pactware/" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 rounded-[50%] border-[1px] border-solid border-gray-700 flex items-center justify-center md:p-[1rem] p-[0.75rem]" icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className="md:relative md:w-[50%] w-full h-screen">
                        <img className="right-0 md:absolute static w-full h-full md:flex hidden" src="../images/blog3-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default LandingPage;