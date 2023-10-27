import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <Link href={"/"}>
        <h3 className="text-3xl font-semibold text-white z-0 hover:text-red-600
                       cursor-pointer duration-200">
            food.
        </h3>
    </Link>
  )
}
export default Logo