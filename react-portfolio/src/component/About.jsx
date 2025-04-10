const About = () => {
    return ( <>
    <div className="bg-[#0a101e] w-full p-[1rem] md:p-[2rem]">
        <div className="mx-auto md:w-[35rem] w-full h-fit  relative top-0 z-1">
            <h1 className="text-center md:text-[102px] text-[55px] text-[#101624] w-full font-bold h-full">ABOUT ME</h1>
            <div className="absolute inset-0 mx-auto z-2 md:mt-[2.3rem] mt-[1.3rem]">
                <div className="w-fit mx-auto flex flex-col md:gap-[0.5rem] gap-[0.2rem] items-center">
                    <h1 className="md:text-[25px] text-[15px] text-[#fec544] font-bold">ABOUT ME</h1>
                    <div className="w-[10rem] h-[3px] bg-[#3f4551]"><p class="mx-auto w-[5rem] h-full bg-[#FFC848]"></p></div>
                </div>
            </div>
        </div>
        <div className="mt-[2rem] w-full flex items-center justify-between gap-[2rem] md:gap-0 md:flex-row flex-col">
            <img class="w-full md:w-[50%] md:h-[100vh] h-[60vh] z-1 static" src="..\src/assets/images/blog.png" alt="" />
            <div class="w-full md:w-[45%] flex flex-col gap-[1.2rem]">
                <h1 class="lg:text-[36px] md:text-[28px] text-[26px] text-white leading-[2.5rem]">Hi There! I'm Abdulganiyu Abdulazeez</h1>
                <h2 class="lg:text-[25px] text-[20px] text-[#fec544]">Website Developer</h2>
                <p class="text-gray-400 lg:text-[18px] text-[15px]">I am website developer with strong focus in front end development. Website development create user interface for website as it makes the website interactive.</p>
                <div class="flex items-center md:gap-[3rem] gap-[2rem] text-[12px] lg:text-[16px] text-gray-400"><div class="w-[20%]">Birthday</div><p class="flex gap-[1rem] items-center w-[80%]"><span class="w-[10%]">:</span><span class="w-[90%]">February 20, 2006</span></p></div>
                <div class="flex items-center md:gap-[3rem] gap-[2rem] text-[12px] lg:text-[16px] text-gray-400"><div class="w-[20%]">Phone</div><p class="flex gap-[1rem] items-center w-[80%]"><span class="w-[10%]">:</span><span class="w-[90%]">+234 701-023-3344</span></p></div>
                <div class="flex items-center md:gap-[3rem] gap-[2rem] text-[12px] lg:text-[16px] text-gray-400"><div class="w-[20%]">Email</div><p class="flex gap-[1rem] items-center w-[80%]"><span class="w-[10%]">:</span><span class="w-[90%]">abdulganiyuabdulazeez 20@gmail.com</span></p></div>
                <div class="flex items-center md:gap-[3rem] gap-[2rem] text-[12px] lg:text-[16px] text-gray-400"><div class="w-[20%]">Address</div><p class="flex gap-[1rem] items-center w-[80%]"><span class="w-[10%]">:</span><span class="w-[90%]">37, Adedosu Street, Lagos, Nigeria</span></p></div>
                <div class="flex items-center md:gap-[3rem] gap-[2rem] text-[12px] lg:text-[16px] text-gray-400"><div class="w-[20%]">Language</div><p class="flex gap-[1rem] items-center w-[80%]"><span class="w-[10%]">:</span><span class="w-[90%]">English</span></p></div>
                <div class="flex items-center md:gap-[3rem] gap-[2rem] text-[12px] lg:text-[16px] text-gray-400"><div class="w-[20%]">Freelance</div><p class="flex gap-[1rem] items-center w-[80%]"><span class="w-[10%]">:</span><span class="w-[90%]">Available</span></p></div>
                <a href="../assets/images/My CV.pdf" class="bg-[#fec544] px-[4rem] py-[0.8rem] w-fit rounded-[24px] mt-[2rem]">Download Cv</a>
            </div>
        </div>
    </div>
    </> );
}
 
export default About;