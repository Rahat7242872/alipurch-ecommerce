
import Head from "./components/Header";
import Banner_Carousel from "./components/Banner_Carousel";
import Categories from "./components/category/category"
import ProductSection from "./components/productSection/productSection";
import GridBaner from "./components/gridBanner";
export default function Home() {
  return (
    <>
    <Head/>
    <Banner_Carousel/>
    <Categories/>
    <GridBaner/>
    <ProductSection/>
    </>
  )
}
