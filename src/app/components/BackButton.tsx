"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const BackButton = ({
  textColor = "#cccccc",
  imageSrc = "/arrow-left.png",
  label = "back",
  fallbackRoute = "/blogs",
}) => {

  const router = useRouter()

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push(fallbackRoute)
    }
  }

  return (
    <button
      className="flex gap-2 items-center mb-3 cursor-pointer"
      onClick={handleClick}
    >
      <span>
        <Image
          src={imageSrc}
          width={24}
          height={24}
          alt="back-icon"
        />
      </span>

      <p style={{ color: textColor }} className="text-[20px]">
        {label}
      </p>
    </button>
  )
}

export default BackButton