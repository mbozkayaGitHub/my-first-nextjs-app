import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import  Footer from './components/Footer/Footer'
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users"> Users</Link>
      <ProductCard/>
      <Footer/>
    </main>
  );
}
