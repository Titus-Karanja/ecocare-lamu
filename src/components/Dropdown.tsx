import { aboutDropdown } from "../lib/navbarItems"

export default function Dropdown() {
  return (
    <div className="flex flex-col" >
      {aboutDropdown.map((item, key) => {
        return (
          <a key={key} href={item.href}>{item.title}</a>
        )
      })}
    </div>
  )
}