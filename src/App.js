import "./App.css"
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return <div>
      <Header className='w-full h-fit drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] '/>

      <Blogs></Blogs>

      <Footer></Footer>
  </div>;
}
