function HeroBanner() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><defs><pattern id="conference" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23152a54"/><circle cx="20" cy="20" r="2" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="40" r="2" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="30" r="2" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="1200" height="400" fill="url(%23conference)"/></svg>')`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 w-7/12 mx-auto px-4 h-full flex flex-col justify-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Mewujudkan Tata Kelola Pemerintahan yang Efektif dan Harmonis
        </h1>

        {/* Description */}
        <p className="text-lg text-blue-100 max-w-2xl mb-6">
          Kementerian Dalam Negeri Republik Indonesia berkomitmen untuk
          memperkuat otonomi daerah, meningkatkan kualitas pelayanan publik, dan
          mendukung stabilitas pemerintahan demi kesejahteraan masyarakat
          Indonesia.
        </p>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </div>
  );
}

export default HeroBanner;
