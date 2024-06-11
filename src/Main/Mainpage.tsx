import Carosel from "../carosel/Carosel";
import Aboutus from "../ui/aboutUs/Aboutus";
import Clients from "../ui/client/Clients";
import Footer from "../ui/footer/Footer";
import Landingscreen from "../ui/landing/Landingscreen";
import Midsection from "../ui/midsection/Midsection";
function Mainpage() {
  return (
    <div>
      <Landingscreen />
      <Midsection />
      <Aboutus />

      <Carosel />
      <Clients />
      <Footer />
    </div>
  );
}

export default Mainpage;
