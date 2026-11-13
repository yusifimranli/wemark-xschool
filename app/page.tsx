'use client';

import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutXSchool from "./components/AboutXSchool";
import Founder from "./components/Founder";
import Program from "./components/Program";
import MarqueeSection from "./components/MarqueeSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://admin.wemark.pro/api/tasks-xschool/')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData || {});
        setLoading(false);
      })
      .catch((err) => {
        console.log("API xətası", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-[#EAEAEA] flex items-center justify-center font-bold text-xl">Yüklənir...</div>;
  }

  return (
    <main className="min-h-screen bg-[#EAEAEA]">
      <Header />
      <Banner data={data} />
      <AboutXSchool data={data} />
      <Founder data={data} />
      <Program data={data} />
      <MarqueeSection data={data} />
      <FaqSection data={data} />
      <Footer />
    </main>
  );
}