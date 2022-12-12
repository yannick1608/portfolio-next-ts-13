import type { NextPage } from 'next'
import AboutSection from '../ui/AboutSection'
import Container from '../ui/Container'
import ExperienceSection from '../ui/ExperienceSection'
import HomeSection from '../ui/HomeSection'

const Home: NextPage = () => {
  return (
    <Container>
      <HomeSection id="home"/>
      <AboutSection id="about"/>
      <ExperienceSection id="experience"/>
      <section id="skills" className="min-h-screen bg-yellow-400">skills</section>
    </Container>
  )
}

export default Home
