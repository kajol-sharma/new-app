import About from "./(mainPage)/about/page";
import Footer from "./(mainPage)/footer/page";
import Header from "./(mainPage)/header/page";
import CategoryPage from "./(mainPage)/categories/page";
import MainProducts from "./(mainPage)/mainProducts/page";
import Carousel from "./(mainPage)/carousel/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel/>
      <About/>
      <MainProducts/>
      <CategoryPage/>
      <Footer/>
    </div>
  );
}
