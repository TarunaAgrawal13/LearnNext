function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* About Us */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            About Us
          </h2>

          <p className="leading-8 text-lg">
            Music School is a premier institution dedicated to
            teaching the art and science of music. We nurture talent
            and inspire creativity through world-class education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-lg">
            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              About
            </li>

            <li className="hover:text-white cursor-pointer">
              Courses
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Follow Us
          </h2>

          <div className="flex flex-col space-y-3 text-lg">
            <a href="#" className="hover:text-white">
              Facebook
            </a>

            <a href="#" className="hover:text-white">
              Twitter
            </a>

            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Contact Us
          </h2>

          <div className="space-y-3 text-lg leading-8">
            <p>
              New Delhi, India <br />
              Delhi 10001
            </p>

            <p>
              Email: <br />
              info@musicschool.com
            </p>
          </div>
        </div>

        <p className="text-center text-xs pt-8">@ Music School Sience 2026</p>

      </div>
    </footer>
  );
}

export default Footer;