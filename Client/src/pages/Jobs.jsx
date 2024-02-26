import { useEffect } from "react";

export const Jobs = () => {
  useEffect(() => {
    const getJobs = async () => {
      const response = await fetch("http://localhost:3000/api/jobs");
      const jsondata = await response.json();
      console.log(jsondata);
    };
    getJobs();
  }, []);

  return <div>Jobs</div>;
};
