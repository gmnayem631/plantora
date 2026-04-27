import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import logo from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Plants", href: "/plants" },
    { label: "About", href: "/about" },
    { label: "My Plants", href: "/dashboard/manage" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/gulam-mustafa-nayem/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/gmnayem631",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-green-950 text-green-100 pt-16 pb-8 px-6">
      <div className="max-w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-green-800">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="Plantora logo" width={32} height={32} />
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Plantora
              </span>
            </Link>
            <p className="text-sm text-green-400 leading-relaxed max-w-xs">
              Your personal indoor plant companion. Track, discover, and grow
              your green collection.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-green-400 hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-1">
              Explore
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-green-400 hover:text-white transition-colors duration-200 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact / Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-1">
              Stay in Touch
            </h4>
            <p className="text-sm text-green-400">
              Get plant care tips and updates straight to your inbox.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-2 bg-green-900 border border-green-700 rounded-full px-4 py-2 flex-1">
                <MdMailOutline size={16} className="text-green-400 shrink-0" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent text-sm text-green-100 placeholder-green-600 outline-none w-full"
                />
              </div>
              <button className="bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-xs text-green-600">
          <p>© {new Date().getFullYear()} Plantora. All rights reserved.</p>
          <div className="flex items-center gap-1 text-green-600">
            <Image src={logo} alt="Plantora logo" width={12} height={12} />
            <span>Made with care for plant lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
