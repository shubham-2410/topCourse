import { useState } from "react";
import Card from "./Card";

function Cards ({courses , category}){

    const [liked , setLikedCourses] = useState([]);

    let allCourse = [];
    const getCourse=()=>{
        if(category=="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourse.push(course);
                })
            })
            return allCourse;
        }
        else{
            // console.log("  " , courses[category]);
            return courses[category] || [];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4 w-[1200px] ">
            {
                getCourse().map((course , index)=>{
                    return <Card key={index} {...course} liked={liked} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    );
}

export default Cards;