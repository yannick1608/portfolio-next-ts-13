import type { NextPage } from 'next'
import AboutSection from '../ui/AboutSection'
import Container from '../ui/Container'
import ResumeSection from '../ui/ResumeSection'
import HomeSection from '../ui/HomeSection'
import SkillsSection from '../ui/SkillsSection'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import useScrollSpy from 'react-use-scrollspy';

//scrollspy link for docs: https://github.com/Purii/react-use-scrollspy
const Home: NextPage = () => {
  const ids : string[] = ["home", "about", "resume", "skills"]
  let activeSection : string|undefined = undefined;
  const sectionRefs : MutableRefObject<any>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const activeSectionIndex = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -400, //negative value for positive offset of viewport top 
  })
  if(typeof ids[activeSectionIndex] === 'undefined') {
    activeSection = undefined;
  }
  else {
    activeSection = "/#" + ids[activeSectionIndex]
  }
  useEffect(() => {
    ids.forEach((val, index) => {
      let section = document.getElementById(val)
      sectionRefs[index].current = section;
    })
  }, [])


  return (
    <Container activeSection={activeSection}>
      <HomeSection id="home"/>
      <AboutSection id="about"/>
      <ResumeSection id="resume"/>
      <SkillsSection id="skills"/>
    </Container>
  )
}

export default Home
