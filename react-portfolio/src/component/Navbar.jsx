import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
    return (
        <>
            <div className="flex w-full fit gap-[2rem] items-center justify-between bg-[#070d1b] p-[1rem] border-b-[1px] border-b-gray-700 relative">
                <div className="flex items-center gap-[0.5rem]">
                    <div className="rounded-[50%] border-[3px] border-solid border-[#fec544] w-[4rem] h-[4rem] p-[0.6rem] overflow-hidden flex items-center justify-center">
                        <img className="w-full h-full" src="../src/assets/images/portfolio Logo.svg" alt="" />
                    </div>
                    <h1 className="text-[40px] text-white"><b><span className="text-[#fec544]">A</span>bdulazeez</b></h1>
                </div>
                <div className="flex md:static absolote items-center gap-[2rem]">
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Home</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">About</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Skill</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Resume</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Contact</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">|</p>
                    <div className="flex items-center gap-[1rem] text-white"><FontAwesomeIcon className="text-white" icon={faPhone} /><p className="text-[#ffc848]">+234 710233344</p></div>
                </div>
                <div className="items-center md:hidden flex">
                    <img className="w-[1.5rem] h-[1.5rem]" src="../images/icon-hamburger.svg" alt="" />
                    <img src="../assets/images/icon-close.svg" alt="" />
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