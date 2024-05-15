"use client";

import Layout from "@/components/layout/Layout";
import { PropsWithChildren } from "react";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
