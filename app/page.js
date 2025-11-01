import About from "./(mainPage)/about/page";
import Footer from "./(mainPage)/footer/page";
import Header from "./(mainPage)/header/page";
import CategoryPage from "./(mainPage)/categories/page";
import PunnyadharaProducts from "./(mainPage)/mainProducts/page";
import MainCarousel from "./(mainPage)/mainCarousel/page";

export default function Home() {
  return (
    <div>
      <Header />
      <MainCarousel/>
      <PunnyadharaProducts />
      <About />
      <CategoryPage />
      <Footer />
    </div>
  );
}
