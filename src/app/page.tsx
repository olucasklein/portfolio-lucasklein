import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
  ScrollToTop,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
