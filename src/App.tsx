import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Classes from './components/Classes'
import Timetable from './components/Timetable'
import Gallery from './components/Gallery'
import Coaches from './components/Coaches'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Classes />
        <Timetable />
        <Gallery />
        <Coaches />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
