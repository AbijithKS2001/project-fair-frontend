import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Project() {
  return (
    <div>
      <h2 className='text-center m-5'>All Projects</h2>
      <input type="text" style={{width:'400px',marginLeft:'600px'}} placeholder='Search by technologies...' className='form-control mx-auto m-5'  />
     <div className="row">
      <div className="col">
        <ProjectCard/>
      </div>
      </div>   
    </div>
  )
}

export default Project