import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../animation";
import Text from "@/components/Text";

export default function Index({ data, isActive, setSelectedIndicator }: any) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={href}>
        <div className={`transition duration-100 mb-3 w-[250px] ${isActive ? "border-b border-primary" : "border-b border-transparent"}`}>
          <Text weight="regular" size="heading-4" className="!text-white">
            {title}
          </Text>
        </div>
      </Link>
    </motion.div>
  );
}
