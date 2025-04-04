import React from "react";
import Icon from "../../assets/image/iconrecyclens.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-[#008080] text-white py-12 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
            <div className="container mx-auto max-w-[1330px] flex flex-col md:flex-row items-center justify-between">
                {/* Logo dan Slogan */}
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <div className="flex items-center">
                        <img
                            src={Icon}
                            alt="icon-recyclens"
                            className="max-w-[250px]"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-sm mt-2">
                            Cerdas Pilah Sampah, Cerdas Jaga Bumi
                        </p>
                        <div className="flex justify-center space-x-8 mt-4">
                            <a href="#" className="hover:text-gray-300">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="h-8 w-8"
                                />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FontAwesomeIcon
                                    icon={faXTwitter}
                                    className="h-8 w-8"
                                />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="h-8 w-8"
                                />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <span className="h-8 w-8">@</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Menu RecycLens */}
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">
                        RecycLens
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Scan Sampah
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Edukasi
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Menu Informasi */}
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">
                        Informasi
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Kontak
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Kebijakan Privasi
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Syarat & Ketentuan
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                © 2025 RecycLens. All rights reserved.
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
