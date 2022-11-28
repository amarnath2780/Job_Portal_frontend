import {createContext , useState} from 'react';

export const JobContext = createContext(null)
 
 function SingleJob({children}) {
    const [jobDetails, setJobDetails] = useState();
   return (
     <JobContext.Provider value={{jobDetails,setJobDetails}}>
        {children}
     </JobContext.Provider>
   )
 }
 
 export default SingleJob
 