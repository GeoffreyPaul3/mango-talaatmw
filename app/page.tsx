import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Menu />
      <Testimonials />
      <Contact />
    </>
  )
}

