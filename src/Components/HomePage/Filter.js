import React, { useState } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Filter() {

    const [workMode, setWorkMode] = useState(false);


  return (
    <div className="filtersContainer">
        <div className="filterHeading">
            <FilterListIcon/>
            <span class="fw500 pl-8">All Filters</span>
        </div>
        <hr />
        
        <div className="filters">
        <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setWorkMode(!workMode)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">Work mode</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {workMode ? <div className="filterOpen">
                    <hr />
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from office</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from Home</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Hybrid</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Remote</span>
                    </div>
                </div> : ''}
            </div>

            <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setWorkMode(!workMode)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">Department</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {workMode ? <div className="filterOpen">
                    <hr />
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from office</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from Home</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Hybrid</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Remote</span>
                    </div>
                </div> : ''}
            </div>

            <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setWorkMode(!workMode)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">Category</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {workMode ? <div className="filterOpen">
                    <hr />
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from office</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from Home</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Hybrid</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Remote</span>
                    </div>
                </div> : ''}
            </div>


            <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setWorkMode(!workMode)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">State</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {workMode ? <div className="filterOpen">
                    <hr />
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from office</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Work from Home</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Hybrid</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="checkbox" name="" id="" />
                        <span class="ellipsis fleft" title="Work from office">Remote</span>
                    </div>
                </div> : ''}
            </div>

        </div>
    </div>
  )
}

export default Filter
