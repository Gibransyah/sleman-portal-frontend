import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">
              Portal Data Kabupaten Sleman
            </h1>
            
            {/* Navigation */}
            <nav className="flex gap-6">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 font-medium transition"
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-600 hover:text-blue-600 font-medium transition"
              >
                Dashboard
              </Link>
              <Link 
                to="/data-penduduk" 
                className="text-gray-600 hover:text-blue-600 font-medium transition"
              >
                Data Penduduk
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2026 Portal Data Sleman. Tugas Akhir - UI/UX.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;