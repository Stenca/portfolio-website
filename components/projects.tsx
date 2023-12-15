"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { Project } from './project'


export default function Projets() {
  return (
    <section id="projects" className=" scroll-mt-28">
        <SectionHeading>Mes Projets</SectionHeading>
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
