import type { NextPage } from 'next'
import AboutSection from '../ui/AboutSection'
import Container from '../ui/Container'
import ResumeSection from '../ui/ResumeSection'
import HomeSection from '../ui/HomeSection'
import SkillsSection from '../ui/SkillsSection'

const Home: NextPage = () => {
  return (
    <Container>
      <HomeSection id="home"/>
      <AboutSection id="about"/>
      <ResumeSection id="resume"/>
      <SkillsSection id="skills"/>
    </Container>
  )
}

export default Home
