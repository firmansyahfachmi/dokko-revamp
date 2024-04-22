'use client'
import Layout from "@/components/layout/Layout";
import Home from "./home/page";
import { useEffect } from "react";

export default function Dokko() {
  
  useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
      })
    })
  }, [])

  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
