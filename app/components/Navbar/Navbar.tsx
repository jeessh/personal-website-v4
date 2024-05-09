
export function Navbar() {
  return (
    <nav className="fixed flex justify-between items-center w-full h-20 pl-24 pr-24 top-0">
      <a href="/" className="text-xl font-bold">
        JH
      </a>
      <div className="flex space-x-4">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}
