import bghome from "../assets/image/background/bghome.png";
import bgAboutus from "../assets/image/background/bgAboutus.png";
import bgRecyclens from "../assets/image/background/bgwhyrecyclens.png";
import trash from "../assets/image/trash.png";
import handrecyc from "../assets/image/handrecyc.png";
import { CheckSquare, Linkedin } from "lucide-react";
import member1 from "../assets/image/team/member1.png";
import member2 from "../assets/image/team/member2.png";
import member3 from "../assets/image/team/member3.png";
import member4 from "../assets/image/team/member4.png";
import member5 from "../assets/image/team/member5.png";

const About = () => {
  const teamMembers = [
    {
      name: "Alghifari Ramadhan",
      id: "(FEBE) F5040D5Y0068",
      role: "Team Leader & Frontend Developer",
      img: member1,
    },
    {
      name: "Fariza Novianti",
      id: "(FEBE) F5040D5X0290",
      role: "UI/UX Designer & Frontend Developer",
      img: member3,
    },
    {
      name: "Isa Bayu",
      id: "(FEBE) F5040D5Y0444",
      role: "Full stack Developer",
      img: member2,
    },
    {
      name: "Ahmad Zaqi",
      id: "(FEBE) F5040D5Y0303",
      role: "Full stack Developer",
      img: member5,
    },
    {
      name: "M. Radithya Satya",
      id: "(ML) M5040D5Y0593",
      role: "Machine Learning",
      img: member4,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[640px] flex flex-col justify-center"
        style={{
          backgroundImage: `url(${bgAboutus})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="container mx-auto max-w-[1240px] flex flex-col items-center text-center mb-24">
          <div className="relative text-white px-4 w-full max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4 leading-tight">
              Cerdas Pilah Sampah, Cerdas Jaga Bumi
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80">
              #KitaSemuaAgenPerubahan
            </p>
          </div>
        </div>

        {/* Trash Image - Responsive positioning */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[450px] px-4">
          <img
            src={trash}
            alt="Tempat Sampah"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-8 sm:py-12 lg:py-20 px-4 md:px-8 lg:px-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[640px]"
        style={{
          backgroundImage: `url(${bgRecyclens})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Recycle Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src={handrecyc}
                alt="Recycle Icon"
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[360px] max-w-full"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-black">
                Misi Kami Sebagai Salah Satu Agen Perubahan
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Di RecycLens, kami percaya bahwa setiap langkah kecil dalam
                pengelolaan sampah dapat membawa perubahan besar bagi lingkungan.
                Oleh karena itu, kami berkomitmen untuk:
              </p>

              <ul className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-base">
                <li className="flex items-start gap-3 text-left">
                  <CheckSquare className="text-black w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                  <span>
                    Mengedukasi masyarakat tentang pentingnya memilah dan mendaur
                    ulang sampah.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <CheckSquare className="text-black w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                  <span>
                    Menghadirkan teknologi cerdas berbasis AI untuk membantu
                    mengidentifikasi jenis sampah dengan cepat dan akurat.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <CheckSquare className="text-black w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                  <span>
                    Mendorong gaya hidup ramah lingkungan dengan solusi inovatif
                    dalam pengelolaan sampah.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <CheckSquare className="text-black w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                  <span>
                    Memberikan akses kepada pengguna untuk terhubung dengan
                    komunitas dan layanan daur ulang.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-8 sm:py-12 lg:py-20 px-4 md:px-8 lg:px-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[640px]"
        style={{
          backgroundImage: `url(${bghome})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">
            Tim Kami
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 w-full max-w-[350px] relative border-2 border-black text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover bg-[#DDF25C] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-600 truncate">
                      {member.id}
                    </p>
                    <div className="w-full h-[1.5px] bg-black mt-2 sm:mt-4" />
                  </div>
                  <div className="bg-[#DDF25C] w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <Linkedin size={12} className="sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-800 mt-2 sm:mt-3">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;