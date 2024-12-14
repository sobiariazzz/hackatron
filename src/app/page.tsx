import AsgaardSofaSection from "@/components/AgaardSofa";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InstagramSection from "@/components/InstagramSection";
import ProductGrid from "@/components/ProductGrid";
import RecentBlogs from "@/components/RecentBlogs";
import RecentProduct from "@/components/RecentProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header className="bg-[transparent] absolute top-0 z-50 w-full"/>
    <BannerSection/>
    <ProductGrid/>
    <RecentProduct/>
    <AsgaardSofaSection/>
    <RecentBlogs/>
    <InstagramSection/>
    <Footer/>
    </>
  );
}
