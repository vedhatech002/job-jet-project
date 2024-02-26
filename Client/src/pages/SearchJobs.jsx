import JobCard from "../components/JobCard"

const SearchJobs = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-4 p-4"> 
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
        </div>
    )
}

export default SearchJobs