"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
    className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
     transition={{
        delay:0.175,
     }}
     id="about"
    >
    <SectionHeading>Informations à mon propos</SectionHeading>
    <p className="mb-3">
        Après mon cursus en développement, j'ai dévié en réalisant des missions d'intérim dans d'autre secteurs d'activité jusque 2023. J'ai néanmoins pendant mon temps libre continué à{" "}<span className="font-medium">développer mes compétences</span> et rester à jour sur le tech stack que j'utilise aujourd'hui, MERN<span className="font-medium">(MongoDB, React.js, Node.js + Next.js)</span>.
        Mes aspects favoris de la programmation sont la résolution de problèmes, et la découverte de nouvelles technologies. Je suis actuellement à la recherche d'un poste en tant que développeur Web.
      </p>
      <p>
        <span className="font-medium">Quand je ne code pas</span>, j'aime regarder des séries/films, jouer aux jeux-vidéos, lire des comics. Je lis également sur différents sujets qui me plaisent comme l'histoire et les sciences.
      </p>
    </motion.section>
  )
}
