import SEOMeta from "../components/SEOMeta";
import Landing from "../components/sections/Landing";
import Accumulate from "../components/sections/Accumulate";
import Navbar from "../components/sections/Navbar";
import Stake from "../components/sections/Stake";
import Yield from "../components/sections/Yield";
import Footer from "../components/sections/Footer";
import ScrollUpBtn from "../components/ScrollUpBtn";

const SEOdesc =
  "We auto-compound your LP tokens to generate EVEN MORE LP tokens. Just deposit, sit back, and EARN!";

export default function Home() {
  return (
    <>
      <SEOMeta page="Accumulator" description={SEOdesc} path="/" /> <Navbar />
      <Landing />
      <Yield />
      <Accumulate />
      <Stake />
      <Footer />
      <ScrollUpBtn />
    </>
  );
}
