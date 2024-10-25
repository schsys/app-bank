import Menu from "@/components/Menu";
import Link from "next/link";

export default function () {
  return (
    <header >
      <div className="flex items-center justify-around max-w-screen">
        <div className="w-screen">
          <Link href="#">
            <span className="font-bold text-2xl">INTERDIMENSIONAL<strong>BANK</strong></span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )
}