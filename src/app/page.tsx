import AboutPage from '@/components/About'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
// import Products from '@/components/Products'
import Food from '@/components/Food'


export default function Home() {
  return (
    <main >
      <Banner />
      <AboutPage />
      {/* <Products /> */}
      <Food />
      <Contact />
    </main>
  )
}