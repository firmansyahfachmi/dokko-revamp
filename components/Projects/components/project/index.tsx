"use client";
import React from "react";
import styles from "./style.module.scss";
import Text from "@/components/Text";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Index({
  index,
  title,
  manageModal,
  category,
  link,
}: any) {
  const Router = useRouter();
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      onClick={() => Router.push(link)}
      className={styles.project}
    >
      <Text size="heading-6" weight="medium" className="project-title">
        {title}
      </Text>
      <Text size="body-2" className="project-category">
        {category}
      </Text>
    </div>
  );
}
