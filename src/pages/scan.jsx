import { useEffect, useRef, useState } from "react";
import bgscan from "../assets/image/background/bgwhyrecyclens.png";

const Scan = () => {
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const [streamActive, setStreamActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
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

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.error("Gagal mengakses kamera", err);
        setStreamActive(false);
      }
    };

    if (previewImage === null && !streamActive) {
      startCamera();
    }
  }, [previewImage, streamActive]);

  const processImage = async (file) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`http://localhost:8080/predict`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          `API Error: ${data.detail || data.message || response.status}`
        );
      }

      if (data.kategori.toLowerCase() === "organik") {
        setBorderColor("border-[#B9FF66]");
      } else if (data.kategori.toLowerCase() === "non-organik") {
        setBorderColor("border-[#FF8F2E]");
      } else {
        setBorderColor("border-[#FF3729]");
      }

      setResult(data);
      setShowModal(true);
    } catch (error) {
      console.error("Error processing image:", error);
      setError(`Gagal memproses gambar: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChooseImage = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      processImage(file);
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
      canvas.toBlob((blob) => {
        if (blob) {
          const imageUrl = URL.createObjectURL(blob);
          setPreviewImage(imageUrl);
          processImage(blob);
        }
      }, "image/png");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPreviewImage(null);
    setStreamActive(false);
  };

  const getDescription = () => {
    if (!result) return "";

    switch (result.prediksi.toLowerCase()) {
      case "plastik":
        return "Sampah plastik membutuhkan waktu sangat lama untuk terurai. Sebaiknya didaur ulang atau digunakan kembali.";
      case "kertas":
      case "kardus":
        return "Kertas dan kardus dapat didaur ulang. Pastikan bersih dan kering sebelum dibuang.";
      case "biologis":
      case "sampah":
        return "Sampah organik dapat terurai alami dan baik untuk dijadikan kompos.";
      case "beterai":
        return "Sampah berbahaya! Jangan buang sembarangan. Bawa ke pusat pengolahan berbahaya.";
      case "kaca":
        return "Sampah kaca bisa didaur ulang berkali-kali. Buang di tempat sampah kaca.";
      case "logam":
        return "Logam bisa didaur ulang. Pisahkan dari sampah lain dan buang di tempat logam.";
      case "pakaian":
      case "sepatu":
        return "Pakaian dan sepatu bisa didonasikan atau didaur ulang jadi produk lain.";
      default:
        return "Pisahkan sampah non-organik untuk didaur ulang.";
    }
  };

  return (
    <section
      className="flex justify-center items-center min-h-screen px-4 md:px-8 lg:px-16 bg-cover bg-center mb-4"
      style={{ backgroundImage: `url(${bgscan})` }}
    >

      <div className="text-center w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Scan dan Deteksi Jenis Sampah Disini!
        </h2>

        <div className="w-full max-w-[700px] aspect-video border-2 border-teal-600 rounded-md overflow-hidden flex items-center justify-center bg-black/10 relative mx-auto">
          {isLoading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
              <p className="text-teal-500">Memproses gambar...</p>
            </div>
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
              style={{ transform: "scaleX(-1)" }}
            />
          )}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
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

        {error && <p className="text-red-600 mt-2">{error}</p>}

        {showModal && result && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 px-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-center">Hasil Deteksi Sampah</h3>

                <div className={`mb-2 rounded-lg overflow-hidden border ${borderColor}`}>
                  <img
                    src={previewImage}
                    alt="Sampah terdeteksi"
                    className="w-full h-48 object-cover"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 mb-1">Kategori</p>
                    <p className="font-bold text-sm">{result.kategori}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 mb-1">Akurasi</p>
                    <p className="font-bold text-sm">{result.persen}</p>
                  </div>
                  <div className="col-span-2 bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 mb-1">Prediksi</p>
                    <p className="font-bold text-sm capitalize">
                      {result.prediksi === "beterai" ? "Baterai" : result.prediksi}
                    </p>
                  </div>
                </div>

                <div className="p-2 bg-teal-50 border border-teal-200 rounded-lg">
                  <p className="text-xs font-medium text-gray-500 mb-1">Deskripsi:</p>
                  <p className="text-gray-700 text-sm">{getDescription()}</p>
                </div>
              </div>

              <div className="bg-gray-100 px-6 py-2 flex justify-end rounded-b-lg">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-teal-500 transition-colors"
                >
                  Mengerti
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Scan;