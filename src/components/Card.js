import {FcLike , FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
function Card({id , description , image , title , liked , setLikedCourses}){

    function clickHandler(){
        // liked initially
        if(liked.includes(id)){
            setLikedCourses((prev)=> prev.filter((cid)=>( cid !== id)))
            toast.warning("Removed Successfully")
        }
        else{
            // Not liked
            if(liked.length===0){
                setLikedCourses([id]);
            }else{
                setLikedCourses((prev)=>[...prev , id]);
            }
            toast.success("Liked Successfully")
        }
    };
    
    return (
        <div className='w-[300px] bg-purple-700'>
            <div className='w-[300px] bg-purple-600 rounded-md overflow-hidden relative' >
                <div >
                <img src={image.url} alt={image.alt} className=''/>
                </div>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center shadow-md'>
                    <button onClick={clickHandler}>
                        {
                            liked.includes(id)?<FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                        }
                    </button>
                </div>
            </div>
            <div className='p-4 '>
                <p className='text-white font-semibold text-lg leading-6'>{title}</p>
                <p className='mt-2 text-white'>{description}</p>
            </div>
        </div>
    );
}

export default Card;