import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">K</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Kemendagri R.I.</h3>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 max-w-md">
              Direktorat Jenderal Kepemimpinan dan Pendidikan Kementerian Dalam Negeri Republik Indonesia.
            </p>
            <p className="text-sm text-gray-300 mb-4 max-w-md">
            Kementerian Dalam Negeri mempunyai tugas menyelenggarakan urusan di bidang pemerintahan dalam negeri untuk membantu Presiden dalam menyelenggarakan pemerintahan negara
            </p>
          </div>
          
          <div className="md:w-2/3 md:pl-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-sm">Situs Komponen</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Sekretariat Jenderal</a></li>
                <li><a href="#" className="hover:text-white">Ditjen Bina Administrasi Kewilayahan</a></li>
                <li><a href="#" className="hover:text-white">Ditjen Bina Pemerintahan Desa</a></li>
                <li><a href="#" className="hover:text-white">Badan Strategi Kebijakan Dalam Negeri</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Kantor Pusat</h4>
              <address className="text-sm text-gray-300 not-italic">
                <p>Jl. Medan Merdeka Utara No.7</p>
                <p>Daerah Khusus Ibukota Jakarta 10110</p>
              </address>
              
              <h4 className="font-semibold mb-2 mt-4 text-sm">Email</h4>
              <a href="mailto:pengaduan@kemendagri.go.id" className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
                <Mail size={14} />
                <span>pengaduan@kemendagri.go.id</span>
              </a>

              <h4 className="font-semibold mb-2 mt-4 text-sm">Telepon</h4>
              <a href="tel:+622150249000" className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
                <Phone size={14} />
                <span>(021) 3450038</span>
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Media Sosial</h4>
              <div className="flex space-x-3 mb-4">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © Copyright 2024
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white">FAQ</a>
              <a href="#" className="hover:text-white">Persyaratan Layanan</a>
              <a href="#" className="hover:text-white">Pengaturan Privasi</a>
              <a href="#" className="hover:text-white">Penggunian Responsif</a>
              <a href="#" className="hover:text-white">Pembatasan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;