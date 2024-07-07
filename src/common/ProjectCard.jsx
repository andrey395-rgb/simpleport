import React from 'react'

function ProjectCard({src, link,alt, p}) {
  return (
    <a href={link} target="_blank">
          <img id= 'imageholder' className="hover" src={src} alt={`${alt} logo`} />
          <h4 className='labeltext'>{alt}</h4>
          <p>{p}</p>
        </a>

      
  )
}

export default ProjectCard;