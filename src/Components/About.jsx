import Video from "../Static/beachVid.mp4"
import {AiOutlineSearch} from "react-icons/ai"
const About = () => {
    return(
        <div className="w-full h-screen relative" id="about"> 
            <video src={Video} alt="/" loop autoPlay muted className="w-full h-full object-cover"/>
            
            <div className="w-full h-full top-0 left-0 absolute bg-gray-900/40 "></div>
            <div className="top-0 w-full h-full absolute p-4 left-0 flex flex-col justify-center text-center text-white font-bold">
                <h1 className="text-2xl font-bold text-white"> First Class Travel</h1>
                <h3 className="text-xl font-bold">Top 1% Locations Worldwide</h3>
            
                <form className=" flex justify-between items-center bg-white text-black rounded-md w-full p-1 mx-auto max-w-[400px] mt-2">
                    <input type="text" placeholder="Search Destination" className="max-w-[400px] focus:outline-0 "/>
                    <div className="">
                        <button>
                            <AiOutlineSearch size={20} style={{color:"white"}} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}
export default About;