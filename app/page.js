import About from "./(mainPage)/about/page";
import Footer from "./(mainPage)/footer/page";
import Header from "./(mainPage)/header/page";
import CategoryPage from "./(mainPage)/categories/page";

export default function Home() {
  return (
    <div>
      <Header />
      <About/>
      <CategoryPage/>
      <Footer/>
    </div>
  );
}
