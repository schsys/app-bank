import Link from "next/link"

export default function Menu() {

  const menuItems = ["services", "features", "demo", "contact"];

  return (
    <nav >
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className="text-sm font-medium hover:underline underline-offset-4 px-4" href="#"
        >
          {item}
        </Link>
      ))
      }
    </nav>
  )
}