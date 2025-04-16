import React from "react";
import bg1 from "../../assets/image/background/bgb3_1.png";
import bg2 from "../../assets/image/background/bgb3_2.png";
import bg3 from "../../assets/image/background/bgb3_3.png";
import bedul from "../../assets/image/bedul.png";
import article1 from "../../assets/image/Article/articleanorganik1.png";
import article2 from "../../assets/image/Article/articleanorganik2.png";
import article3 from "../../assets/image/Article/articleanorganik3.png";
import { Link } from "react-router-dom";

const Berbahaya = () => {
  return (
    <div>
      {/* Bagian Title Section */}
      <section
        className="flex justify-center items-center py-16 px-4 md:px-8 lg:px-16"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "1440px 783px",
          backgroundRepeat: "no-repeat",
          height: "763px",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="container mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between">
          <div className="text-center max-w-[720px] mx-auto">
            <h1 className="text-5xl text-white font-bold mb-4">
              Jangan asal buang!{" "}
              <span className="text-[#FF3729]">Sampah B3</span> butuh perhatian
              khusus—pelajari cara amannya di sini!
            </h1>
          </div>
        </div>
      </section>

      {/* Bagian Edukasi */}
      <section
        className="flex justify-center items-center py-16 px-4 md:px-8 lg:px-16"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "1440px 863px",
          height: "863px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="container mx-auto max-w-[1240px] flex flex-col md:flex-row items-center">
          <div className="w-full text-center md:text-left">
            <h1 className="text-4xl text-center font-bold mb-16">
              <span className="text-[#FF3729] font-bold">Sampah B3</span>:
              Ancaman yang Harus Dikelola dengan Bijak!
            </h1>
            <p className="text-black-600 text-2xl mb-8 text-center">
              <span className="text-[#FF3729] font-bold">
                Sampah B3 (Bahan Berbahaya Beracun)
              </span>{" "}
              adalah jenis sampah yang mengandung zat beracun, korosif, mudah
              terbakar, atau berpotensi merusak lingkungan dan kesehatan
              manusia. Penanganannya harus dilakukan secara khusus agar tidak
              membahayakan makhluk hidup maupun lingkungan sekitar.
            </p>
            <p className="text-black-600 text-2xl mt-16 mb-8 text-center">
              Lalu, apa saja contoh{" "}
              <span className="text-[#FF3729] font-bold">Sampah B3</span>
              ?
            </p>

            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-4 mt-16 p-4 max-w-screen-lg mx-auto">
              {/* Sisa Makanan Card */}
              <div className="bg-[#ff3729] border-2 border-black-500 rounded-[32px] p-6 text-center w-[420px] shadow-xl shadow-black/50">
                <h3 className="text-black-800 font-semibold mb-2">Limbah Elektronik</h3>
                <hr className="border-black-500 my-4" />
                <p className="text-black-700 text-sm">
                    Komputer rusak, televisi, peralatan elektronik lainnya
                </p>
              </div>

              {/* Dedaunan Card */}
              <div className="bg-[#ff3729] border-2 border-black-500 rounded-[32px] p-6 text-center w-[420px] shadow-xl shadow-black/50">
                <h3 className="text-black-800 font-semibold mb-2">Produk Kimia</h3>
                <hr className="border-black-500 my-4" />
                <p className="text-black-700 text-sm">
                Pestisida, cat, thinner, oli, dan bahan kimia lainnya
                </p>
              </div>

              {/* Kulit Buah dan Sayur Card */}
              <div className="bg-[#ff3729] border-2 border-black-500 rounded-[32px] p-6 text-center w-[420px] shadow-xl shadow-black/50">
                <h3 className="text-black-800 font-semibold mb-2">Medis dan Farmasi</h3>
                <hr className="border-black-500 my-4" />
                <p className="text-black-700 text-sm">
                Jarum suntik bekas, obat kadaluwarsa, perban terkontaminasi                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Lanjutan */}
      <section
        className="flex justify-center items-center pb-16 px-4 md:px-8 lg:px-16"
        style={{
          height: "863px",
        }}
      >
        <div className="container mx-auto max-w-[1240px] flex flex-col md:flex-row items-center">
          <div className="w-full text-center md:text-left">
            <h1 className="text-4xl text-center font-bold mb-16">
              Lebih Lanjut Mengenai{" "}
              <span className="text-[#FF3729] font-bold">Sampah B3</span>
            </h1>

            {/* Items */}
            <div className="max-w-screen-lg mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6">
                {/* Image 1: Ada Apa di Balik Sampah Organik */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={article1}
                    alt="Ada Apa di Balik Sampah Organik"
                    className="w-full h-auto"
                  />
                </div>

                {/* Image 2: Pengolahan Sampah Organik */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={article2}
                    alt="Pengolahan Sampah Organik"
                    className="w-full h-auto"
                  />
                </div>

                {/* Image 3: Komposter */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={article3}
                    alt="Komposter"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Scan Feature */}
      <section
        className="flex justify-center items-center pb-16 px-4 md:px-8 lg:px-16"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "1440px 863px",
          height: "563px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="container mx-auto max-w-[1240px] h-full flex flex-col md:flex-row items-center">
          <div className="w-full mt-16 p-8 md:p-16 flex flex-col h-full md:flex-row items-center bg-white rounded-[32px] shadow-lg shadow-black/50">
            <div className="w-2/3 md:w-1/2 md:pr-8">
              <h1 className="text-2xl text-left font-bold mb-8">
                Ingin Tahu Jenis Sampahmu? Cek dengan Scan Sampah RecycLens!
              </h1>
              <p className="text-black-600 text-lg mb-8">
                Gunakan fitur canggih RecycLens untuk mendeteksi jenis sampah
                hanya dengan foto! Klik tombol di bawah ini dan mulai deteksi
                sekarang!
              </p>
              <Link to="/scan">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-teal-600 hover:border-transparent transition duration-300">
                  Coba Fitur Scan Sampah Sekarang!
                </button>
              </Link>
            </div>
            <div className="w-1/3 md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <img
                src={bedul}
                alt="Scan Sampah"
                className="w-[320px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Berbahaya;
