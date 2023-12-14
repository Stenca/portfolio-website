import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

export default function Projets() {
  return (
    <section>
        <SectionHeading>Projets</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

type ProjectProps = typeof projectsData[0];

function Project({ title, description, tags, imageURL}: ProjectProps) {
    return <article></article>
}
