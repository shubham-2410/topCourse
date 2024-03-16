
function Filters ({filterData , category , setCategory}){

    function clickHandler(title){
        setCategory(title);
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((filter , index)=>{
                    return(
                         <button  className="text-lg px-2 py1 rounded-md text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 " 
                         onClick={()=>clickHandler(filter.title)}  key={index}>{filter.title} </button>
                         );
                })
            } 
        </div>
    );
}

export default Filters;