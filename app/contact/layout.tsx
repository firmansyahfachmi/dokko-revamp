"use client";

import Layout from "@/components/layout/Layout";
import { PropsWithChildren } from "react";

export default function ContactLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
