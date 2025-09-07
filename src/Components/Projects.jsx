import Home from '../Components/Home.jsx'
import '../Components/Styles/Projects.css'
import { getProjects } from '.././db/db.js'
import Project from './Project.jsx'
import { useState, useEffect } from 'react'
function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
            .then((res) => {
                setProjects(res)
            })
    }, [])

    return (
        <section>
            <Home 
                title='My Projects'
                txt='Here are some projects where I applied my frontend skills to build responsive, user-friendly, and visually appealing applications.'
            />
            <div className='page'>
                <h2>My projects</h2>
                <div className='carrousel'>
                    {   
                        projects.map((p) => (
                            <Project key={p.id} project={p} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects