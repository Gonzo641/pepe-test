import AboutPage from '@/components/About'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
// import Products from '@/components/Products'
import Food from '@/components/Food'
import SectionDivider from '@/components/SectionDivider'


export default function Home() {
  return (
    <main >
      <Banner />
      <AboutPage />
      <SectionDivider />
      {/* <Products /> */}
      <Food />
      <SectionDivider />
      <Contact />
    </main>
  )
}