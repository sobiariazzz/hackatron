
import AsgaardSofaSection from "@/components/AgaardSofa";
import Banner from "@/components/Banner";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import InstagramSection from "@/components/InstagramSection";
import Product from "@/components/product";
import ProductGrid from "@/components/ProductGrid";
import RecentBlogs from "@/components/RecentBlogs";
import RecentProduct from "@/components/RecentProducts";

// components/Section.js
export default function Page() {
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
  