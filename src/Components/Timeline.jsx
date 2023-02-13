import { useState, useRef, useEffect} from "react"
import Data from './Data'
const Total_Carousel = Data.length;
const Timeline = () => {
    const[activeItem, setActiveItem] = useState(0)
    const carouselRef = useRef();

    const scroll = (node, left) => {
        return node.scrollTo({left, behaviour:"smooth"})
    }

    const handleClick = (e, i) => {
        e.preventDefault()

        if (carouselRef.current){
            const scrollLeft = Math.floor(carouselRef.current.scroll)

            scroll(carouselRef.current, scrollLeft)
        }
    }

    const handleScroll = () =>{
        if(carouselRef.current){
            const index = Math.round((carouselRef.current.scrollLeft))
            setActiveItem(index);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0)
        }
        window.addEventListener('resize', handleResize);
    }, [])
    return (
       <div className='max-w-[500px]'>
         <div ref={carouselRef} onScroll={handleScroll} className="flex flex-row">
            {Data.map((data,index) => {
                return(
                    <div key={data.id} final={index === Total_Carousel - 1}>
                        <div className={data.id === activeItem ? 'w-full h-full':'hiddden'} index={index} id={data.id} active={activeItem} onClick={(e) => handleClick(e, index)}>
                           <img src={data.img} alt='' className="w-[500px] h-[500px]"/>
                        </div>
                       
                    </div>
                )
            })}
         </div>
         <div>
            {Data.map((item,index) =>(
                <button 
                key={index}
                index={index}
                active={activeItem}
                onClick={(e) => handleClick(e,index)}
                
                >
                   
                </button>
            ))}
         </div>
       </div>
    )
}
export default Timeline;