import SocialLinks from "@components/SocialLinks";
import Navbar from "@components/Navbar";
import ImageGallery from "@components/image-gallery/ImageGallery";

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-[#241f21] text-white justify-between">
            <Navbar />

            <div>
                <p></p>
            </div>

            <div className="h-[70vh]">
                <ImageGallery />
            </div>

            <div className="container flex justify-center pb-10 mx-auto">
                <SocialLinks />
            </div>
        </div>
    );
}
