import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
    return (
        <>
            <div className="flex w-full fit gap-[2rem] items-center justify-between bg-[#070d1b] p-[1rem] border-b-[1px] border-b-gray-700">
                <div className="flex items-center justify-center p-[1rem] w-[5rem] h-[5rem] rounded-[50%] border-solid border-[4px] border-[#FFC848]"><img src="..\src/assets/images/portfolio Logo.svg" alt="logo" /></div>
                <div className="flex items-center gap-[2rem]">
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Home</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">About</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Skill</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Resume</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">Contact</p>
                    <p className="text-bold text-white cursor-pointer hover:text-[#ffc848]">|</p>
                    <div className="flex items-center gap-[1rem] text-white"><FontAwesomeIcon className="text-white" icon={faPhone} /><p className="text-[#ffc848]">+234 710233344</p></div>
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