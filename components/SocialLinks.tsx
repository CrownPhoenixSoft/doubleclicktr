"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/InstagramIcon";
// import LinkedinIcon from "../icons/LinkedinIcon";
// import TwitterIcon from "../icons/TwitterIcon";
import { useMemo } from "react";
import Map from "./Map";

export default function SocialLinks() {
    const links = useMemo(
        () => [
            {
                title: "Facebook",
                href: "https://www.facebook.com/Doubleclicktr",
                target: "_blank",
                icon: (
                    <div className="overflow-hidden bg-white rounded-lg">
                        <FacebookIcon className="text-primary w-7 h-7" />
                    </div>
                ),
            },
            // {
            //     title: "Twitter",
            //     href: "https://twitter.com/JumeiraUni",
            //     target: "_blank",
            //     icon: (
            //         <div className="overflow-hidden bg-white rounded-lg">
            //             <TwitterIcon className="text-primary w-7 h-7" />
            //         </div>
            //     ),
            // },
            // {
            //     title: "Linked In",
            //     href: "https://www.linkedin.com/company/jumeira-university/",
            //     target: "_blank",
            //     icon: (
            //         <div className="overflow-hidden bg-white rounded-lg">
            //             <LinkedinIcon className="text-primary w-7 h-7" />
            //         </div>
            //     ),
            // },
            {
                title: "Instagram",
                href: "https://www.instagram.com/doubleclicktr/",
                target: "_blank",
                icon: (
                    <div className="overflow-hidden bg-white rounded-lg">
                        <InstagramIcon className="text-primary w-7 h-7" />
                    </div>
                ),
            },
            {
                title: "Email Address",
                href: "mailto: doubleclicktr@crownphoenixadv.com",
                target: "_blank",
                icon: (
                    <div className="flex overflow-hidden rounded-lg w-7 h-7 bg-primary">
                        <EnvelopeIcon className="w-6 h-6 m-auto text-white rouned-xl" />
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <div className="flex gap-3">
            {links.map(({ href, ...link }, i) => (
                <a key={i} href={href} {...link}>
                    {link.icon}
                </a>
            ))}

            <Map />
        </div>
    );
}
