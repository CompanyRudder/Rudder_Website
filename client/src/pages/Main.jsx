import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ScrollProgress from "../box/scroll-progress";
import CardSection from "../components/main/CardSection";
import Carousel from "../components/main/CarouselSection";
import ContactSection from "../components/main/ContactSection";
import EventSection from "../components/main/EventSection";
import GameSection from "../components/main/GameSection";
import MapSection from "../components/main/MapSection";
// import PartnerSection from "../components/main/PartnerSection";
import PortfolioSection from "../components/main/PortfolioSection";
import Footer from "../components/main/Footer";
import i18n from "../language/i18n";
import LoadingScreen from "./etc/LoadingScreen";
import CarouselSection from "../components/main/CarouselSecUpdate";

export default function Main({ slice, slice_en }) {
  const [lang, setLang] = useState("ko"); // props로 보낼거임(locale)
  const [loading, setLoading] = useState(true);
  const getLang = (xlang) => {
    // Nav에서 받아옴('kr' or 'en')
    setLang(xlang);
  };
  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
    i18n.changeLanguage(lang);
  }, [lang]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <NavBar getLang={getLang} />
      <ScrollProgress />
      {/* <Carousel /> */} {/* 배경&로고 다 넘어감 */}
      <CarouselSection /> {/* 로고Fix & 배경만 넘어감 */}
      <CardSection lang={lang} />
      <PortfolioSection slice={slice} lang={lang} slice_en={slice_en} />
      <GameSection lang={lang} />
      <EventSection lang={lang} />
      {/* <PartnerSection /> */}
      <ContactSection />
      <MapSection />
      <Footer lang={lang} />
    </>
  );
}
