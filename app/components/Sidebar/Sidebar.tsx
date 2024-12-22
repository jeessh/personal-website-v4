import Image from "next/image"
import Link from "next/link"
import home from "../../assets/home.svg"
import personal from "../../assets/personal.svg"
import work from "../../assets/work.svg"
import contact from "../../assets/contact.svg"


export function Sidebar() {
    return (
        <main className="fixed left-16 top-1/2 -translate-y-1/2 max-xl:hidden">
            <Link href="#home" className="block m-8 scroll-smooth">
                <Image src={home} alt="home" width={32} height={32} />
            </Link>
            <Link href="#personal" className="block m-8 scroll-smooth">
                <Image src={personal} alt="personal" width={32} height={32} />
            </Link>
            <Link href="#work" className="block m-8 scroll-smooth">
                <Image src={work} alt="work" width={32} height={32} />
            </Link>
            <Link href="#contact" className="block m-8">
                <Image src={contact} alt="Contact" width={32} height={32} />
            </Link>
        </main>
    )
}