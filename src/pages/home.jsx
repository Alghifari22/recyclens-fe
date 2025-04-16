import Hero from "../assets/image/herosection.png";
import WhyRecyclensImage from "../assets/image/whyrecyclens.png";
import HeroBackground from "../assets/image/background/bghome.png";
import WhyRecyclensBackground from "../assets/image/background/bgwhyrecyclens.png";
import GelombangBackground from "../assets/image/background/bggelombang.png";
import ScanBackground from "../assets/image/background/bgscan.png";
import Icon1 from "../assets/image/icon1.png";
import Icon2 from "../assets/image/icon2.png";
import Icon3 from "../assets/image/icon3.png";
import b3 from "../assets/image/b3.png";
import anorganik from "../assets/image/anorganik.png";
import organik from "../assets/image/organik.png";
import Twoperson from "../assets/image/twoperson.png";
import ArrowOrganik from "../assets/image/selengkapnya_organik.png";
import ArrowAnorganik from "../assets/image/selengkapnya_anorganik.png";
import ArrowB3 from "../assets/image/selengkapnya_b3.png";
import Article1 from "../assets/image/Article/article1.png";
import Article2 from "../assets/image/Article/article2.png";
import Article3 from "../assets/image/Article/article3.png";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 2000,
    };

    const cards = [
        {
            title: "Jenis Sampah Organik",
            image: organik,
            icon: ArrowOrganik,
            alt: "Sampah Organik",
            link: "/organik",
        },
        {
            title: "Jenis Sampah Anorganik",
            image: anorganik,
            icon: ArrowAnorganik,
            alt: "Sampah Anorganik",
            link: "/anorganik",
        },
        {
            title: "Jenis Sampah Bahan Berbahaya Beracun (B3)",
            image: b3,
            icon: ArrowB3,
            alt: "Sampah B3",
            link: "/b3",
        },
    ];

    const articles = [
        {
            title: "Sampah nya harus dibuang sesuai tempatnya",
            description:
                "sub headline menuju ke artikel akan ditaruh disini...",
            image: Article1,
            alt: "Tempat Sampah",
            link: "/artikel/sampah-dibuang-ditempatnya",
        },
        {
            title: "Dia aja milah sampah, masa kita engga sih. yuk buang yang bener",
            description:
                "sub headline menuju ke artikel akan ditaruh disini...",
            image: Article2,
            alt: "Orang memilah sampah",
            link: "/artikel/milah-sampah",
        },
        {
            title: "Kebanyakan sampah plastik juga gak bagus tau",
            description:
                "sub headline menuju ke artikel akan ditaruh disini...",
            image: Article3,
            alt: "Sampah Plastik",
            link: "/artikel/sampah-plastik",
        },
    ];
    return (
        <div>
            {/* Bagian Hero Section */}
            <section
                className="py-16 px-4 md:px-8 lg:px-16"
                style={{
                    backgroundImage: `url(${HeroBackground})`,
                    backgroundSize: "1440px 783px",
                    backgroundRepeat: "no-repeat",
                    height: "585px",
                    backgroundPosition: "center -150px",
                }}
            >
                <div className="container mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mt-[-80px] md:ml-4">
                        <h1 className="text-4xl font-bold mb-4 leading-snug">
                            Menavigasi Dunia <br />
                            <span className="text-[#006A71]">Daur Ulang</span>
                            <br />
                            dengan Teknologi
                        </h1>
                        <p className="text-gray-600 mb-8">
                            RecycLens membantu Anda mengenali dan memilah sampah
                            dengan cerdas melalui teknologi pemindaian gambar.
                            Cukup unggah atau ambil foto, dan biarkan sistem
                            kami mengidentifikasi jenis sampah untuk Anda.
                        </p>
                        <Link to="/scan">
                        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300">
                            Scan Sampah
                        </button>
                        </Link>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={Hero}
                            alt="Hero"
                            className="rounded-lg max-w-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Bagian "Mengapa RecycLens?" */}
            <section
                className="py-16 px-4 md:px-8 lg:px-16"
                style={{
                    backgroundImage: `url(${WhyRecyclensBackground})`,
                    backgroundSize: "1440px 863px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 0px"
                }}
            >
                <div className="container mx-auto max-w-[1240px] flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 flex justify-start pl-4">
                        <img
                            src={WhyRecyclensImage}
                            alt="Mengapa RecycLens?"
                            className="rounded-lg max-w-[250px]"
                        />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-16">
                            Mengapa RecycLens?
                        </h1>
                        <p className="text-gray-600 mb-8">
                            RecycLens hadir sebagai solusi inovatif untuk
                            membantu proses daur ulang dan pengelolaan sampah
                            dengan lebih mudah. Menggunakan teknologi pemindaian
                            gambar berbasis AI, platform kami mampu mendeteksi
                            jenis sampah secara instan hanya dari foto yang Anda
                            ambil atau unggah.
                        </p>
                        <p className="text-gray-600 mb-8">
                            Kami percaya bahwa perubahan besar dimulai dari
                            langkah kecil. Dengan RecycLens, memilah sampah
                            menjadi lebih cepat, akurat, dan menyenangkan.
                            Bergabunglah dengan kami dalam menjaga kebersihan
                            lingkungan untuk masa depan yang lebih hijau!
                        </p>
                        <Link to="/about">
                        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300">
                            Selengkapnya
                        </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* BG Gelombang */}
            <div
                style={{
                    backgroundImage: `url(${GelombangBackground})`,
                    backgroundSize: "1440px 867px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    marginTop: "90px",
                    transform: "translate(-50%, -50%)",
                    height: "200px",
                }}
            ></div>

            {/* Bagian Scan Foto */}
            <section
                className="py-16 px-4 md:px-8 lg:px-16"
                style={{
                    backgroundImage: `url(${ScanBackground})`,
                    backgroundSize: "1440px 863px",
                    backgroundRepeat: "no-repeat",
                    height: "753px",
                    backgroundPosition: "center"
                }}
            >
                <div className="container mx-auto max-w-[1340px] relative mt-32">
                    <div className="md:w-2/3">
                        <h1 className="text-4xl font-bold mb-4 text-white">
                            Scan Sampah dalam Sekejap
                        </h1>
                        <p className="text-gray-300 mb-8">
                            Pernah bingung harus membuang sampah ke mana? Dengan
                            RecycLens, cukup unggah atau ambil foto, dan AI kami
                            akan mengenali jenis sampah secara instan. RecycLens
                            memanfaatkan teknologi pemindaian gambar berbasis AI
                            untuk mengenali jenis sampah dalam hitungan detik.
                            Cukup unggah atau ambil foto, dan sistem kami akan
                            mengidentifikasi apakah sampah tersebut dapat didaur
                            ulang, organik, atau residu.
                        </p>
                    </div>
                    <div className="md:w-1/2 absolute top-1/4 right-0">
                        <img
                            src={Twoperson}
                            alt="Scan Sampah"
                            className="max-w-[500px]"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <div className="flex items-center">
                            <img
                                src={Icon1}
                                alt="Pilah"
                                className="w-6 h-6 mr-2"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-white">
                                    Pilah dengan Mudah
                                </h2>
                                <p className="text-sm text-gray-300">
                                    Ketahui apakah sampah bisa didaur ulang,
                                    organik, atau residu.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={Icon2}
                                alt="Cepat"
                                className="w-6 h-6 mr-2"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-white">
                                    Cepat & Akurat
                                </h2>
                                <p className="text-sm text-gray-300">
                                    Hanya butuh satu scan untuk mendapatkan
                                    hasil.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={Icon3}
                                alt="Dukung"
                                className="w-6 h-6 mr-2"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-white">
                                    Dukung Lingkungan
                                </h2>
                                <p className="text-sm text-gray-300">
                                    Mulai langkah kecil untuk perubahan besar!
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/scan">
                    <button className="bg-[#D3DE32] hover:bg-teal-600 transition duration-300 hover:text-white text-[#006A71] font-bold py-3 px-12 rounded-md mt-8">
                        Scan Sekarang
                    </button>
                    </Link>
                </div>
            </section>

            {/* Bagian Jenis-jenis Sampah */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="py-12 px-4 md:px-8 lg:px-16">
                    <div className="container mx-auto max-w-[1330px]">
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold mb-8">
                                Sudahkah Kamu Tahu Jenis-jenis Sampah?
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Memilah sampah dengan benar adalah langkah awal
                                untuk menjaga lingkungan. Yuk, kenali beberapa
                                jenis sampah agar proses daur ulang lebih
                                efektif!
                            </p>
                        </div>
                        <Slider {...settings}>
                            {cards.map((card, index) => {
                                let bgColor = "";
                                let firstPart = "Jenis Sampah";
                                let secondPart = "";

                                if (card.title.includes("Organik")) {
                                    bgColor = "bg-[#B9FF66]";
                                    secondPart = "Organik";
                                } else if (card.title.includes("Anorganik")) {
                                    bgColor = "bg-[#FF8F2E]";
                                    secondPart = "Anorganik";
                                } else if (card.title.includes("B3")) {
                                    bgColor = "bg-[#FF3729]";
                                    secondPart = "Bahan Berbahaya Beracun (B3)";
                                }

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-center px-4"
                                    >
                                        <div className="bg-[#f3f3f3] rounded-2xl p-6 w-full max-w-[600px] relative border border-black-300 flex flex-col max-h-[200px]">
                                            <div className="flex flex-col self-start">
                                                <span
                                                    className={`inline-block w-fit px-3 py-1 rounded-md ${bgColor} text-black font-semibold`}
                                                >
                                                    {firstPart}
                                                </span>
                                                <span
                                                    className={`inline-block w-fit px-3 py-1 rounded-md ${bgColor} text-black font-semibold`}
                                                >
                                                    {secondPart}
                                                </span>
                                            </div>

                                            <div className="flex justify-end items-center mb-4 mt-[-45px]">
                                                <img
                                                    src={card.image}
                                                    alt={card.alt}
                                                    className="w-32 h-32 object-contain"
                                                />
                                            </div>

                                            <a
                                                href={card.link}
                                                className="flex items-center text-black hover:underline mt-[-40px]"
                                            >
                                                <img
                                                    src={card.icon}
                                                    alt="Arrow Icon"
                                                    className="w-8 h-8 mr-2"
                                                />
                                                Selengkapnya
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Bagian Blog */}
            <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
                <div className="container mx-auto max-w-[1330px] text-center">
                    <h2 className="text-4xl font-bold mb-4">Blog Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Temukan berbagai artikel menarik seputar sampah, daur
                        ulang, dan lingkungan serta informasi terbaru untuk
                        membantu menciptakan bumi yang lebih bersih dan sehat.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                <img
                                    src={article.image}
                                    alt={article.alt}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2 text-start">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 text-start">
                                        {article.description}
                                    </p>
                                    <a
                                        href={article.link}
                                        className="text-[006A71] flex items-center font-medium hover:underline"
                                    >
                                        Baca Selengkapnya
                                        <FaArrowUpRightFromSquare className="w-4 h-4 ml-2 text-[#006A71]" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                    <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800">
                        Jelajahi Blog
                    </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
