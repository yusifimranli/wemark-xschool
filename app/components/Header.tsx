export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 md:px-16 py-6 text-white">
      {/* Loqo */}
      <div className="font-bold text-xl tracking-wider uppercase">wemark</div>
      
      {/* Menyu linkləri */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
        <a href="#case-studies" className="hover:text-gray-300 transition-colors">Case Studies</a>
        <a href="#career" className="hover:text-gray-300 transition-colors">Career</a>
        <a href="#blog" className="hover:text-gray-300 transition-colors">Blog</a>
        <a href="#about" className="hover:text-gray-300 transition-colors">xSchool</a>
      </nav>

      {/* Sağ düymə */}
      <div>
        <a href="#contact" className="text-sm font-medium underline underline-offset-4 hover:text-gray-300 transition-colors">
          Let's Talk
        </a>
      </div>
    </header>
  );
}