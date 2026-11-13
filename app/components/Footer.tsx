export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-400">Sitemap</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Career</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-400">Follow Us On</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-400">Office</h4>
          <p className="text-sm text-gray-300 leading-relaxed">Alibeyov Gardashlari 27, Sabail, Sabah Residence</p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-400">For Partnerships</h4>
          <p className="text-sm text-gray-300 mb-1">partnership@wemark.az</p>
          <p className="text-sm text-gray-300">+994 51 555 55 55</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>COPYRIGHT © 2026 WEMARK</p>
        <p className="my-4 md:my-0">TERMS & PRIVACY</p>
        <p>AZƏRBAYCAN DİLİ</p>
      </div>
    </footer>
  );
}