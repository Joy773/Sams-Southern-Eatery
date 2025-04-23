import Image from "next/image";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Items from "./components/Items";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Category />
      <Items />
    </div>
  );
}
