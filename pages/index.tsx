import type { NextPage } from 'next'
import Container from '../ui/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <section id="home" className="bg-red-400 min-h-screen">home</section>
      <section id="about" className="min-h-screen bg-blue-400">about</section>
      <section id="experience" className="min-h-screen bg-green-400">experience</section>
      <section id="skills" className="min-h-screen bg-yellow-400">skills</section>
    </Container>
  )
}

export default Home
