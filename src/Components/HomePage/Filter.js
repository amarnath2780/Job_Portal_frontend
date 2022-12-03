import React, { useEffect, useState } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from '../../axios'

function Filter(props) {

    const [workMode, setWorkMode] = useState(true);
    const [department, setDepartment] = useState(false);
    const [category, setCategory] = useState(false);
    const [level, setLevel] = useState(false);
    const [experience, setExperience] = useState(false);

    /* List */
    const [dep, setDep] = useState('');
    const [cat, setCat] = useState('');

    /* Value state */
    const [type, setType] = useState('');
    const [departmentValue, setDepartmentValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [levelValue, setLevelValue] = useState('');
    

    useEffect(() => {
        ListDepartment()
        ListCategory()
    }, []);

    const ListDepartment=()=>{
        axios.get('/list-department/').then((res)=>{
            setDep(res.data)
        })
    }

    const ListCategory=()=>{
        axios.get('/list-category/').then((res)=>{
            setCat(res.data)
        })
    }

    const handleFilter=(e)=>{
        e.preventDefault()
        const value = {
            type:type,
            department:departmentValue,
            category : categoryValue,
            level : levelValue
        }
        props.onFilter(value)
    }

  return (
    <div className="filtersContainer">
        <div className="filterHeading">
            <FilterListIcon/>
            <span class="fw500 pl-8">All Filters</span>
        </div>
        <hr />
        
        <div className="filters">
        <form onSubmit={handleFilter}>
            <button type='submit'>Filter</button>
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
                            <input type="radio" class="radio"  name="fooby[1][]" id="" onClick={(e)=>{
                                setType(e.target.value)
                            }} value='part-time' />
                            <span class="ellipsis fleft" title="Work from office">Part Time</span>
                        </div>
                        <div className='chckBoxCont'>
                            <input type="radio" class="radio"  name="fooby[1][]" id="" onClick={(e)=>{
                                setType(e.target.value)

                            }} value='full-time' />
                            <span class="ellipsis fleft" title="Work from office">Full Time</span>
                        </div>
                        <div className='chckBoxCont'>
                            <input type="radio" class="radio"  name="fooby[1][]" id="" onClick={(e)=>{
                                setType(e.target.value)

                            }} value='intern'  />
                            <span class="ellipsis fleft" title="Work from office">Intern</span>
                        </div>
                        <div className='chckBoxCont'>
                            <input type="radio" class="radio"  name="fooby[1][]" id="" onClick={(e)=>{
                                setType(e.target.value)

                            }} value='remort'/>
                            <span class="ellipsis fleft" title="Work from office">Remort</span>
                        </div>
                        <div className='chckBoxCont'>
                            <input type="radio" class="radio"  name="fooby[1][]" id="" onClick={(e)=>{
                                setType(e.target.value)

                            }} value='work-from-home' />
                            <span class="ellipsis fleft" title="Work from office">Work From Home</span>
                        </div>
                </div> : ''}
            </div>

            <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setDepartment(!department)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">Department</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {department ? <div className="filterOpen">
                    <hr />
                    {dep ?  dep.map((item,key)=>
                    <div className='chckBoxCont'>
                        <input  type="radio" class="radio" value={item.id}  name="fooby[2][]" onClick={(e)=>{
                                setDepartmentValue(e.target.value)
                            }}/>
                        <span class="ellipsis fleft" title="Work from office">{item.department_name}</span>
                    </div>
                )  :''}
                </div> : ''}
            </div>

            <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setCategory(!category)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">Category</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {category ? <div className="filterOpen">
                    <hr />
                    {cat ?  cat.map((item,key)=>
                    <div className='chckBoxCont'>
                        <input  type="radio" class="radio" value={item.id}  name="fooby[3][]" onClick={(e)=>{
                                setCategoryValue(e.target.value)
                            }}/>
                        <span class="ellipsis fleft" title="Work from office">{item.category_name}</span>
                    </div>
                )  :''}
                </div> : ''}
            </div>


            <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setLevel(!level)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">Level</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {level ? <div className="filterOpen">
                    <hr />
                    <div className='chckBoxCont'>
                        <input type="radio" name="fooby[4][]" id="" value='fresher' onClick={(e)=>{
                                setLevelValue(e.target.value)
                            }}/>
                        <span class="ellipsis fleft"  title="Work from office">Fresher</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="radio" name="fooby[4][]" id="" value='intermediate' onClick={(e)=>{
                                setLevelValue(e.target.value)
                            }}/>
                        <span class="ellipsis fleft" title="Work from office">Intermediate</span>
                    </div>
                    <div className='chckBoxCont'>
                        <input type="radio" name="fooby[4][]" id="" value='professional' onClick={(e)=>{
                                setLevelValue(e.target.value)
                            }} />
                        <span class="ellipsis fleft" title="Work from office">Professional</span>
                    </div>
                </div> : ''}
            </div>


            {/* <div className="filterContainers">
                <button style={{background:"none" , textDecoration:"none" , border:"none"}} onClick={()=>{
                    setExperience(!experience)
                }}>
                <div className="filter-heading" >
                    <span class="fw500">Experience</span>
                    <div className="filter-heading-icon">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                </button>
                {experience ? <div className="filterOpen">
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
            </div> */}
        </form>
        </div>
    </div>
  )
}

export default Filter
