"use client";
import React from "react";
import styles from "./style.module.scss";
import Text from "@/components/Text";

export default function index({ index, title, manageModal, category }: any) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <Text size="heading-6" weight="medium" className="project-title">
        {title}
      </Text>
      <Text size="body-2" className="project-category">{category}</Text>
    </div>
  );
}
