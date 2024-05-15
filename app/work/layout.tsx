"use client";

import Layout from "@/components/layout/Layout";
import { PropsWithChildren } from "react";

export default function WorkLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
