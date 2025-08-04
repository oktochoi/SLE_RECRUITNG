import About from "@/components/About";
import Effect from "@/components/Effect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Project from "@/components/Project";
import Recruiting from "@/components/Recruiting";
import Study from "@/components/Study";
import Value from "@/components/Value";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Value />
      <About/>
      <Study />
      <Project/>
      <Effect/>
      <Recruiting/>
      <Effect/>
      <Footer/>
    </>
  );
}
