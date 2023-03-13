import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Navbar() {
    return (
        <div className="container flex justify-between w-full pt-10 mx-auto">
            <div className="relative md:w-[240px] md:h-[120.6px] w-[200px] h-[100.5px]">
                <Image
                    src="/logo.jpg"
                    alt="doubleclicktr"
                    fill
                    className="object-contain"
                />
            </div>

            <ContactForm />
        </div>
    );
}
