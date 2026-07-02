import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <SearchBar />
    </>
  );
}