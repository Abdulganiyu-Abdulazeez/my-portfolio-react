import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faWhatsapp, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocation, faMessage } from "@fortawesome/free-solid-svg-icons"
const Contact = () => {
    return ( 
        <>
            <div id="contact" className="w-full p-[1rem] bg-[#070d1b]">
                <div className="mx-auto md:w-[35rem] w-full h-fit  relative top-0 z-1">
                    <h1 className="text-center md:text-[102px] text-[55px] text-[#101624] w-full font-bold h-full">CONTACT</h1>
                    <div className="absolute inset-0 mx-auto z-2 md:mt-[2.3rem] mt-[1.3rem]">
                        <div className="w-fit mx-auto flex flex-col md:gap-[0.5rem] gap-[0.2rem] items-center">
                            <h1 className="md:text-[25px] text-[15px] text-[#fec544] font-bold">CONTACT</h1>
                            <div className="w-[10rem] h-[3px] bg-[#3f4551]"><p class="mx-auto w-[5rem] h-full bg-[#FFC848]"></p></div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex md:flex-row flex-col md:items-center items-left gap-[2rem] p-[1rem]">
                    <div className="md:w-[50%] w-full flex flex-col gap-[2rem]">
                        <h3 className="text-[30px] text-white">Just Say Hello</h3>
                        <input className="p-[1rem] bg-gray-900 rounded-[10px] border-[1px] border-gray-700 text-gray-300 outline-none" type="text" placeholder="Your Name" />
                        <input className="p-[1rem] bg-gray-900 rounded-[10px] border-[1px] border-gray-700 text-gray-300 outline-none" type="text" placeholder="Your Email" />
                        <input className="p-[1rem] bg-gray-900 rounded-[10px] border-[1px] border-gray-700 text-gray-300 outline-none" type="text" placeholder="Your Subject" />
                        <textarea className="p-[1rem] bg-gray-900 rounded-[10px] border-[1px] border-gray-700 text-gray-300 outline-none" name="" id="" cols="20" rows="5" placeholder="Your Message"></textarea>
                        <button className="rounded-[30px] py-[1rem] px-[3rem] bg-[#fec544] w-fit">Send Message</button>
                    </div>
                    <div className="md:w-[50%] w-full flex flex-col gap-[2rem]">
                        <h3 className="text-[30px] text-white">Contact Info</h3>
                        <p className="text-white text-[18px]">Want to meet me? You can connect with me for collaboration, Hire, tutoring and so on through this media stated below</p>
                        <div className="flex items-center gap-[1rem] info">
                            <FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 hover:text-[#fec544] transition-eas-in-out duration-400s rounded-[50%] border-[1px] border-solid border-gray-700 hover:border-[#fec544] flex items-center justify-center p-[1rem]" icon={faMessage} />
                            <div className="flex flex-col gap-[0.5rem]">
                                <h4 className="text-[22px] text-white">Email</h4>
                                <div className="hover:transition-ease-in-out duration-400s hover:text-[#FFC848] hover:text-[#FFC848] text-gray-400 md:text-[18px] text-[12px]">abdulganiyuabdulazeez20@gmail.com <br /> <br /> oluwatomisinomogbolahan275@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[1rem] info">
                            <FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 hover:text-[#fec544] transition-eas-in-out duration-400s rounded-[50%] border-[1px] border-solid border-gray-700 hover:border-[#fec544] flex items-center justify-center p-[1rem]" icon={faPhone} />
                            <div className="flex flex-col gap-[0.5rem]">
                                <h4 className="text-[22px] text-white">Phone</h4>
                                <p className="hover:transition-ease-in-out duration-400s hover:text-[#FFC848] hover:text-[#FFC848] text-gray-400 text-[18px]">+2347010233344</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2rem] info">
                            <FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 hover:text-[#fec544] transition-eas-in-out duration-400s rounded-[50%] border-[1px] border-solid border-gray-700 hover:border-[#fec544] flex items-center justify-center p-[1rem]" icon={faLocation} />
                            <div className="flex flex-col gap-[0.5rem]">
                                <h4 className="text-[24px] text-white">Address</h4>
                                <p className="hover:transition-ease-in-out duration-400s hover:text-[#FFC848] hover:text-[#FFC848] text-gray-400 text-[18px]">37, Adedosu Street, Agege, Lagos, Nigeria.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:gap-[2rem] gap-[1rem] w-full">
                            <h4 className="text-[20px] text-gray-400">Visit my social profile and get connected</h4>
                            <div className="flex items-col md:gap-[2rem] gap-[1rem] w-full">
                                <div className="">
                                    <a href="https://api.whatsapp.com/send?phone=2347010233344" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 hover:text-[#fec544] transition-eas-in-out duration-400s rounded-[50%] border-[1px] border-solid border-gray-700 hover:border-[#fec544] flex items-center justify-center p-[1rem]" icon={faWhatsapp} /></a>
                                </div>
                                <div className="">
                                    <a href="https://github.com/Abdulganiyu-Abdulazeez" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 hover:text-[#fec544] transition-eas-in-out duration-400s rounded-[50%] border-[1px] border-solid border-gray-700 hover:border-[#fec544] flex items-center justify-center p-[1rem]" icon={faGithub} /></a>
                                </div>
                                <div className="">
                                    <a href="https://www.twitter.com/Abdulaz94349364" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 hover:text-[#fec544] transition-eas-in-out duration-400s rounded-[50%] border-[1px] border-solid border-gray-700 hover:border-[#fec544] flex items-center justify-center p-[1rem]" icon={faTwitter} /></a>
                                </div>
                                <div className="">
                                    <a href="https://linkedin.com/in/abdulazeez-abdulganiyu-pactware" target="_blank"><FontAwesomeIcon className="cursor-pointer text-white text-[25px] font-bold text-gray-500 hover:text-[#fec544] transition-eas-in-out duration-400s rounded-[50%] border-[1px] border-solid border-gray-700 hover:border-[#fec544] flex items-center justify-center p-[1rem]" icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;