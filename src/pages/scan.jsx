import { useEffect, useRef, useState } from "react";
import bgscan from "../assets/image/background/bgwhyrecyclens.png";

const Scan = () => {
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const [streamActive, setStreamActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        setStreamActive(true);
      } catch (err) {
        console.error("Gagal mengakses kamera", err);
        setStreamActive(false);
      }
    };

    enableCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true); 
      const imageURL = URL.createObjectURL(file);

      setTimeout(() => {
        setPreviewImage(imageURL);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleCaptureImage = () => {
    if (videoRef.current) {
      setIsLoading(true); 
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL("image/png");

      setTimeout(() => {
        setPreviewImage(imageUrl);
        setIsLoading(false);
      }, 2000); 
    }
  };

  return (
    <section
      className="py-8 px-4 md:px-16 bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgscan})`,
        backgroundSize: "1440px 783px",
        backgroundRepeat: "no-repeat",
        height: "640px",
        backgroundPosition: "center 0px",
      }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Scan dan Deteksi Jenis Sampah Disini!
        </h2>

        <div className="mx-auto w-[700px] h-[400px] border-2 border-teal-600 rounded-md overflow-hidden flex items-center justify-center bg-black/10 relative">
          {isLoading ? (
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-teal-700">Memproses gambar...</p>
            </div>
          ) : previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="mt-4 mb-4 flex justify-center gap-4">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={handleChooseImage}
            disabled={isLoading}
          >
            Pilih gambar
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={handleCaptureImage}
            disabled={isLoading}
          >
            Ambil gambar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scan;
