function Home() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Selamat Datang di Portal Data Sleman
        </h2>
        <p className="text-gray-600 text-lg">
          Akses data publik Kabupaten Sleman dengan mudah dan cepat.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Data Penduduk
          </h3>
          <p className="text-3xl font-bold text-blue-600">125,430</p>
          <p className="text-gray-500 text-sm mt-2">Total Penduduk Depok</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            UMKM
          </h3>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
          <p className="text-gray-500 text-sm mt-2">Total UMKM Terdaftar</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Objek Wisata
          </h3>
          <p className="text-3xl font-bold text-blue-600">42</p>
          <p className="text-gray-500 text-sm mt-2">Destinasi Wisata</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          Lihat Data Penduduk
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition">
          Jelajahi Dataset
        </button>
      </div>
    </div>
  );
}

export default Home;