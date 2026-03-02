"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

  return (
    <button className="flex gap-2 items-center mb-3 cursor-pointer" onClick={() => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/blogs");
  }
}}>
              <span>
                <Image
                  src={"/arrow-left.png"}
                  width={24}
                  height={24}
                  alt="arrow-icon"
                />
              </span>
              <p className="text-[20px] text-[#CCCCCC]">back</p>
            </button>
  )
}

export default BackButton
