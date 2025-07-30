"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import LendSection from "@/components/LendSection";
import TrendingCollection from "@/components/TrendingCollection";
import Footer from "@/components/Footer";
// import Web3AuthComp from "@/components/Web3AuthComp";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Web3AuthComp /> */}
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <Hero />
        <FeaturedCollection />
        <LendSection />
        <TrendingCollection />
        <Footer />
      </div>
    </>
  );
}