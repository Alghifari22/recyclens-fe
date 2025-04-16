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

  const processImage = async (file) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/model/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`API Error: ${data.detail || data.message || response.status}`);
      }

      if (data.kategori.toLowerCase() === 'organik') {
        setBorderColor("border-[#B9FF66]");
      } else if (data.kategori.toLowerCase() === 'non-organik') {
        setBorderColor("border-[#FF8F2E]");
      } else {
        setBorderColor("border-[#FF3729]");
      }

      setResult(data);
      setShowModal(true);
    } catch (error) {
      console.error('Error processing image:', error);
      setError(`Gagal memproses gambar: ${error.message}. Pastikan format file didukung dan coba lagi.`);

      if (import.meta.env.DEV) {
        const mockResult = {
          kategori: "Non-Organik",
          persen: "0%",
          prediksi: "plastik",
        };
        setResult(mockResult);
        setShowModal(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

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
  };  

  const getDescription = () => {
    if (!result) return "";
    
    switch (result.prediksi.toLowerCase()) {
      case "plastik":
        return "Sampah plastik membutuhkan waktu sangat lama untuk terurai. Sebaiknya didaur ulang atau digunakan kembali untuk mengurangi dampak lingkungan.";
      case "kertas":
      case "kardus":
        return "Kertas dan kardus dapat didaur ulang dengan mudah. Pastikan dalam kondisi bersih dan kering sebelum dibuang ke tempat sampah daur ulang.";
      case "biologis":
      case "sampah":
        return "Sampah organik dapat terurai secara alami dan baik untuk dijadikan kompos. Buanglah di tempat sampah organik.";
      case "beterai":
        return "Sampah berbahaya! Jangan dibuang sembarangan. Bawalah ke pusat pengolahan sampah berbahaya terdekat.";
      case "kaca":
        return "Sampah kaca dapat didaur ulang 100% dan berkali-kali tanpa mengurangi kualitasnya. Pastikan dibuang di tempat sampah khusus kaca.";
      case "logam":
        return "Logam dapat didaur ulang berkali-kali. Pisahkan dari sampah lain dan buang di tempat sampah khusus logam.";
      case "pakaian":
      case "sepatu":
        return "Pakaian dan sepatu bekas masih bisa didonasikan jika masih dalam kondisi baik. Jika tidak, dapat didaur ulang menjadi produk lain.";
      default:
        return "Sampah non-organik sebaiknya dipisahkan untuk didaur ulang. Buanglah di tempat sampah non-organik.";
    }
  };

  return (
    <section
      className="py-8 px-4 md:px-16 bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgscan})`,
        backgroundSize: "1440px 863px",
        backgroundRepeat: "no-repeat",
        height: "863px",
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
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
              <p className="text-teal-500">Memproses gambar...</p>
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

        {error && <p className="text-red-600 mt-2">{error}</p>}

        {/* Modal Dialog */}
      {showModal && result && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4 text-center">Hasil Deteksi Sampah</h3>
              
              {/* Image preview */}
              <div className={`mb-4 rounded-lg overflow-hidden border ${borderColor}`}>
                <img src={previewImage} alt="Sampah terdeteksi" className="w-full h-48 object-cover" />
              </div>
              
              {/* Results in a more visual format */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Kategori</p>
                  <p className="font-bold text-lg">{result.kategori}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Akurasi</p>
                  <p className="font-bold text-lg">{result.persen}</p>
                </div>
                <div className="col-span-2 bg-gray-100 p-3 rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Prediksi</p>
                  <p className="font-bold text-lg capitalize">{(result.prediksi === "beterai") ? "Baterai" : result.prediksi}</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Deskripsi:</p>
                <p className="text-gray-700">{getDescription()}</p>
              </div>
              
              {/* Debug information - only show in development */}
              {process.env.NODE_ENV === 'development' && result && (
                <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-left overflow-auto max-h-32">
                  <p className="font-medium">API Response:</p>
                  <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
              )}
            </div>
            
            <div className="bg-gray-100 px-6 py-3 flex justify-end rounded-b-lg">
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
