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
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blogs from API
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                setLoading(true);

                const apiBaseUrl = "https://7dc21a55bb6e.ngrok-free.app";

                const response = await fetch(`${apiBaseUrl}/blogs`, {
                    method: 'GET',
                    headers: {
                        'ngrok-skip-browser-warning': 'true',
                        'Content-Type': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                console.log("Response:", response);
                console.log("API Base URL:", apiBaseUrl);

                
                const data = await response.json();
                
                if (data && data.length > 0) {
                    // Take only first 3 blogs for display
                    setBlogs(data.slice(0, 3));
                }
            } catch (err) {
                setError(`Failed to fetch blog posts: ${err.message}`);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    // Format date function
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            // Format to DD Bulan YYYY in Indonesian
            const months = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
            ];
            
            return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        } catch (e) {
            return dateString;
        }
    };

    // Helper function to truncate content
    const truncateContent = (content, maxLength = 100) => {
        if (content.length <= maxLength) return content;
        return content.substr(0, maxLength) + '...';
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
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
    
    return (
        <div className="overflow-x-hidden">
            {/* Bagian Hero Section */}
            <section
                className="py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[585px]"
                style={{
                    backgroundImage: `url(${HeroBackground})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            >
                <div className="container mx-auto max-w-[1340px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
                    <div className="w-full lg:w-1/2 text-center lg:text-left lg:mt-[-80px] lg:ml-4">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight lg:leading-snug">
                            Menavigasi Dunia <br />
                            <span className="text-[#006A71]">Daur Ulang</span>
                            <br />
                            dengan Teknologi
                        </h1>
                        <p className="text-gray-600 mb-6 lg:mb-8 text-sm sm:text-base">
                            RecycLens membantu Anda mengenali dan memilah sampah
                            dengan cerdas melalui teknologi pemindaian gambar.
                            Cukup unggah atau ambil foto, dan biarkan sistem
                            kami mengidentifikasi jenis sampah untuk Anda.
                        </p>
                        <Link to="/scan">
                            <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-600 transition duration-300 text-sm sm:text-base">
                                Scan Sampah
                            </button>
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={Hero}
                            alt="Hero"
                            className="rounded-lg max-w-full w-full sm:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Bagian "Mengapa RecycLens?" */}
            <section
                className="py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16"
                style={{
                    backgroundImage: `url(${WhyRecyclensBackground})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                }}
            >
                <div className="container mx-auto max-w-[1240px] flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  {/* Kiri - Gambar */}
                  <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                    <img
                      src={WhyRecyclensImage}
                      alt="Mengapa RecycLens?"
                      className="rounded-lg max-w-[200px] sm:max-w-[250px] w-full"
                    />
                  </div>

                  {/* Kanan - Teks */}
                  <div className="w-full lg:w-2/3 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                      Mengapa RecycLens?
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                      RecycLens hadir sebagai solusi inovatif untuk membantu proses daur ulang
                      dan pengelolaan sampah dengan lebih mudah. Menggunakan teknologi
                      pemindaian gambar berbasis AI, platform kami mampu mendeteksi jenis
                      sampah secara instan hanya dari foto yang Anda ambil atau unggah.
                    </p>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                      Kami percaya bahwa perubahan besar dimulai dari langkah kecil. Dengan
                      RecycLens, memilah sampah menjadi lebih cepat, akurat, dan menyenangkan.
                      Bergabunglah dengan kami dalam menjaga kebersihan lingkungan untuk masa
                      depan yang lebih hijau!
                    </p>
                    <Link to="/about">
                      <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-600 transition duration-300 text-sm sm:text-base">
                        Selengkapnya
                      </button>
                    </Link>
                  </div>
                </div>
            </section>

            {/* BG Gelombang - Hidden on mobile for better performance */}
            <div
                className="hidden lg:block"
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
                className="py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16 min-h-[500px] lg:min-h-[753px]"
                style={{
                    backgroundImage: `url(${ScanBackground})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="container mx-auto max-w-[1340px] relative mt-8 sm:mt-16 lg:mt-32">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white text-center lg:text-left">
                                Scan Sampah dalam Sekejap
                            </h1>
                            <p className="text-gray-300 mb-6 lg:mb-8 text-sm sm:text-base text-center lg:text-left">
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
                        <div className="w-full lg:w-1/2 lg:absolute lg:top-1/4 lg:right-0 flex justify-center lg:justify-end">
                            <img
                                src={Twoperson}
                                alt="Scan Sampah"
                                className="max-w-full w-full sm:max-w-md lg:max-w-[500px]"
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <div className="flex items-start sm:items-center">
                            <img
                                src={Icon1}
                                alt="Pilah"
                                className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1 sm:mt-0 flex-shrink-0"
                            />
                            <div>
                                <h2 className="text-base sm:text-lg font-semibold text-white">
                                    Pilah dengan Mudah
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-300">
                                    Ketahui apakah sampah bisa didaur ulang,
                                    organik, atau residu.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start sm:items-center">
                            <img
                                src={Icon2}
                                alt="Cepat"
                                className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1 sm:mt-0 flex-shrink-0"
                            />
                            <div>
                                <h2 className="text-base sm:text-lg font-semibold text-white">
                                    Cepat & Akurat
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-300">
                                    Hanya butuh satu scan untuk mendapatkan hasil.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start sm:items-center">
                            <img
                                src={Icon3}
                                alt="Dukung"
                                className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1 sm:mt-0 flex-shrink-0"
                            />
                            <div>
                                <h2 className="text-base sm:text-lg font-semibold text-white">
                                    Dukung Lingkungan
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-300">
                                    Mulai langkah kecil untuk perubahan besar!
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center lg:text-left">
                        <Link to="/scan">
                            <button className="bg-[#D3DE32] hover:bg-teal-600 transition duration-300 hover:text-white text-[#006A71] font-bold py-2 sm:py-3 px-8 sm:px-12 rounded-md mt-8 text-sm sm:text-base">
                                Scan Sekarang
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bagian Jenis-jenis Sampah */}
            <section className="py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16">
                <div className="container mx-auto max-w-[1330px]">
                    <div className="w-full lg:w-2/3 text-center lg:text-left mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">
                            Sudahkah Kamu Tahu Jenis-jenis Sampah?
                        </h2>
                        <p className="text-gray-600 mb-6 lg:mb-8 text-sm sm:text-base">
                            Memilah sampah dengan benar adalah langkah awal
                            untuk menjaga lingkungan. Yuk, kenali beberapa
                            jenis sampah agar proses daur ulang lebih
                            efektif!
                        </p>
                    </div>
                    
                    {/* Mobile: Stack cards vertically, Desktop: Use slider */}
                    <div className="block md:hidden space-y-4">
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
                                <div key={index} className="w-full">
                                    <div className="bg-[#f3f3f3] rounded-2xl p-4 sm:p-6 w-full relative border border-gray-300 flex flex-col min-h-[120px]">
                                        <div className="flex flex-col self-start mb-4">
                                            <span className={`inline-block w-fit px-2 sm:px-3 py-1 rounded-md ${bgColor} text-black font-semibold text-xs sm:text-sm mb-1`}>
                                                {firstPart}
                                            </span>
                                            <span className={`inline-block w-fit px-2 sm:px-3 py-1 rounded-md ${bgColor} text-black font-semibold text-xs sm:text-sm`}>
                                                {secondPart}
                                            </span>
                                        </div>

                                        <div className="flex justify-end items-center mb-4 flex-1">
                                            <img
                                                src={card.image}
                                                alt={card.alt}
                                                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                                            />
                                        </div>

                                        <a
                                            href={card.link}
                                            className="flex items-center text-black hover:underline text-sm sm:text-base"
                                        >
                                            <img
                                                src={card.icon}
                                                alt="Arrow Icon"
                                                className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                                            />
                                            Selengkapnya
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Desktop: Use slider */}
                    <div className="hidden md:block">
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
                                    <div key={index} className="flex justify-center px-4">
                                        <div className="bg-[#f3f3f3] rounded-2xl p-6 w-full max-w-[600px] relative border border-gray-300 flex flex-col max-h-[200px]">
                                            <div className="flex flex-col self-start">
                                                <span className={`inline-block w-fit px-3 py-1 rounded-md ${bgColor} text-black font-semibold`}>
                                                    {firstPart}
                                                </span>
                                                <span className={`inline-block w-fit px-3 py-1 rounded-md ${bgColor} text-black font-semibold`}>
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
            <section className="py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="container mx-auto max-w-[1330px] text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Blog Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8 lg:mb-12 text-sm sm:text-base">
                        Temukan berbagai artikel menarik seputar sampah, daur
                        ulang, dan lingkungan serta informasi terbaru untuk
                        membantu menciptakan bumi yang lebih bersih dan sehat.
                    </p>
                    
                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#006A71]"></div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-500 mb-4">{error}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="px-4 py-2 bg-[#006A71] text-white rounded-lg hover:bg-teal-700 transition duration-300"
                            >
                                Reload
                            </button>
                        </div>
                    )}

                    {/* Blog Cards */}
                    {!loading && !error && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <img
                                        src={`https://7dc21a55bb6e.ngrok-free.app/blog_thumbnails/${blog.thumbnail}`}
                                        alt={blog.title}
                                        className="w-full h-40 sm:h-48 object-cover"
                                    />
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-base sm:text-lg font-semibold mb-2 text-start">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs sm:text-sm mb-2 text-start">
                                            {truncateContent(blog.content)}
                                        </p>
                                        <p className="text-gray-400 text-xs mb-4 text-start">
                                            {formatDate(blog.created_at)}
                                        </p>
                                        <Link
                                            to={`/blog/${blog.id}`}
                                            className="text-[#006A71] flex items-center font-medium hover:underline text-sm sm:text-base"
                                        >
                                            Baca Selengkapnya
                                            <FaArrowUpRightFromSquare className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-[#006A71]" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* No blogs state */}
                    {!loading && !error && blogs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">Belum ada blog tersedia.</p>
                        </div>
                    )}

                    <Link to="/blog">
                        <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 text-sm sm:text-base">
                            Jelajahi Blog
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;