import * as React from "react";
import { PropsWithChildren, useRef } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
