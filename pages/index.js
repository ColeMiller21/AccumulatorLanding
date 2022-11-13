import Landing from "../components/sections/Landing";
import Accumulate from "../components/sections/Accumulate";
import Navbar from "../components/sections/Navbar";
import Stake from "../components/sections/Stake";
import Yield from "../components/sections/Yield";
import Footer from "../components/sections/Footer";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Yield />
      <Accumulate />
      <Stake />
      <Footer />
      <ScrollUpButton AnimationDuration={800} style={{ color: "red" }} />
    </>
  );
}
