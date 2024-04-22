import Text from "@/components/Text";
import Link from "next/link";

export default function index() {
  return (
    <div className="flex w-full gap-[40px]">
      <a href="">
        <Text size="body-2" weight="regular" className="!text-primary">
          Instagram
        </Text>
      </a>
      <a href="">
        <Text size="body-2" weight="regular" className="!text-primary">
          Linkedin
        </Text>
      </a>
    </div>
  );
}
