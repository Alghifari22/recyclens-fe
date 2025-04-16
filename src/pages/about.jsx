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
    <div>
      <section
        className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgAboutus})`,
          backgroundSize: "1440px 783px",
          backgroundRepeat: "no-repeat",
          height: "640px",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="container mx-auto max-w-[1240px] flex flex-col md:flex-row items-center">
          <div className="relative text-center text-white px-4 mt-[30px] w-full">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2">
              Cerdas Pilah Sampah, Cerdas Jaga Bumi
            </h1>
            <p className="text-sm md:text-base text-white/80">
              #KitaSemuaAgenPerubahan
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 mb-16">
          <img
            src={trash}
            alt="Tempat Sampah"
            className="w-full max-w-[800px] h-auto"
          />
        </div>
      </section>

      <section
        className="py-20 px-4 md:px-16 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgRecyclens})`,
          backgroundSize: "1440px 783px",
          backgroundRepeat: "no-repeat",
          height: "640px",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="grid md:grid-cols-2 place-items-center">
          {/* Recycle Image */}
          <div className="">
            <img
              src={handrecyc}
              alt="Recycle Icon"
              className="w-[300px] md:w-[360px]"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-3xl mx-auto px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
              Misi Kami Sebagai Salah Satu Agen Perubahan
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Di RecycLens, kami percaya bahwa setiap langkah kecil dalam
              pengelolaan sampah dapat membawa perubahan besar bagi lingkungan.
              Oleh karena itu, kami berkomitmen untuk:
            </p>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <CheckSquare className="text-black w-5 h-5 mt-1" />
                Mengedukasi masyarakat tentang pentingnya memilah dan mendaur
                ulang sampah.
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="text-black w-5 h-5 mt-1" />
                Menghadirkan teknologi cerdas berbasis AI untuk membantu
                mengidentifikasi jenis sampah dengan cepat dan akurat.
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="text-black w-5 h-5 mt-1" />
                Mendorong gaya hidup ramah lingkungan dengan solusi inovatif
                dalam pengelolaan sampah.
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="text-black w-5 h-5 mt-1" />
                Memberikan akses kepada pengguna untuk terhubung dengan
                komunitas dan layanan daur ulang.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 md:px-16 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bghome})`,
          backgroundSize: "1440px 783px",
          backgroundRepeat: "no-repeat",
          height: "640px",
          backgroundPosition: "center -130px",
        }}
        >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Tim Kami</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-5 w-[350px] relative border-2 border-black text-left"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover bg-[#DDF25C]"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-xs text-gray-600">{member.id}</p>
                    <div className="w-full h-[1.5px] bg-black mt-4" />
                  </div>
                  <div className="bg-[#DDF25C] w-6 h-6 rounded-full flex items-center justify-center">
                    <Linkedin size={14} />
                  </div>
                </div>
                <p className="text-sm text-gray-800 mt-3">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
