import './Styles/Projects.css'
function Project( {project} ) {
    return (
        <div className='project-card'>
            <iframe 
                src={project.link}
                title={project.title}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation"
                allow="clipboard-write; encrypted-media; fullscreen"    
            ></iframe>
        </div>
    )
}

export default Project