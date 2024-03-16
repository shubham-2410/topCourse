import "./App.css";
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Filters from './components/Filters';
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from './components/Data';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {

	const [courses, setCourses] = useState([]);
	const [loader , setLoader] = useState(true);
	const [category , setCategory] = useState(filterData[0].title);

	useEffect(() => {
		const fetchData = async () => {
			setLoader(true);
			try {
				const res = await fetch(apiUrl);  
				const output = await res.json();

				setCourses(output.data);
				// console.log(output);
			}
			catch{
				toast.error("Something Went Wrong")
			}
			setLoader(false);
		}

		fetchData();
	}, [])

	return (
		<div className="flex flex-col bg-purple-900">
			<NavBar></NavBar>

			<Filters filterData={filterData} category={category} setCategory={setCategory}></Filters>

			<div className="w-11/12  mx-auto flex  flex-wrap justify-center items-center min-h-[85vh]">
			{
				loader ? <Spinner></Spinner> : <Cards courses={courses} category={category}></Cards> 
			}
			</div>
			
		</div>
	);
}

export default App;