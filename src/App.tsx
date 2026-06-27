import './index.css'

import Nav from './components/Nav'
import Hero from './components/Hero'
import PhotoStrip from './PhotoStrip'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Classes from './components/Classes'
import Timetable from './components/Timetable'
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

        {/* Moving Photo Strip */}
        <PhotoStrip />

        <About />

        <WhyChoose />

        <Classes />

        <Timetable />

        <Coaches />

        <Reviews />

        <Contact />
      </main>

      <Footer />

      <FloatingButtons />
    </>
  )
}
