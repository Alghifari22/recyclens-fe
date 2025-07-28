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
        <footer className="bg-[#008080] text-white py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1330px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start space-y-12 md:space-y-0">
                
                {/* Logo & Sosial Media */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src={Icon}
                        alt="icon-recyclens"
                        className="max-w-[200px] mb-4"
                    />
                    <p className="text-sm">
                        Cerdas Pilah Sampah, Cerdas Jaga Bumi
                    </p>
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                        <a href="#" className="hover:text-gray-300">
                            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-gray-300 text-lg">
                            @
                        </a>
                    </div>
                </div>

                {/* Divider for mobile */}
                <div className="block md:hidden border-t border-white opacity-30 my-4 w-full"></div>

                {/* Menu RecycLens */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">
                        RecycLens
                    </h3>
                    <ul className="space-y-2 text-center md:text-left">
                        <li><a href="#" className="hover:text-gray-300">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-gray-300">Scan Sampah</a></li>
                        <li><a href="#" className="hover:text-gray-300">Edukasi</a></li>
                        <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                    </ul>
                </div>

                {/* Menu Informasi */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">
                        Informasi
                    </h3>
                    <ul className="space-y-2 text-center md:text-left">
                        <li><a href="#" className="hover:text-gray-300">Kontak</a></li>
                        <li><a href="#" className="hover:text-gray-300">Kebijakan Privasi</a></li>
                        <li><a href="#" className="hover:text-gray-300">Syarat & Ketentuan</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 text-center text-sm text-gray-100">
                © 2025 RecycLens. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
