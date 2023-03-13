"use client";

import { MapIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Map() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <button
                    onClick={() => setOpen(true)}
                    className="flex overflow-hidden rounded-lg w-7 h-7 bg-primary"
                >
                    <MapIcon className="w-6 h-6 m-auto text-white rouned-xl" />
                </button>
            </div>

            {open &&
                createPortal(
                    <div
                        className="fixed top-0 left-0 z-10 flex w-full h-full p-8 overflow-y-auto bg-black bg-opacity-25"
                        onClick={() => setOpen(false)}
                    >
                        <div className="relative bg-white rounded-lg overflow-hidden m-auto max-w-full w-full h-[80%] md:w-[800px] md:h-[700px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1504.7214649999703!2d28.908968999999995!3d41.037442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbd7873b0bd5%3A0x255ac78e7260a7c5!2sDoubleclick%20Design%20%26%20Programing%20LTD.!5e0!3m2!1sen!2sus!4v1678734568182!5m2!1sen!2sus"
                                className="w-full h-full overflow-hidden border-none rounded-lg"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            <div className="absolute top-4 right-4">
                                <button
                                    type="button"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-black bg-white border border-black rounded-full hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200"
                                >
                                    <XMarkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
