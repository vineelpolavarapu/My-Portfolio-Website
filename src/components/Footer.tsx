import { FiHeart } from "react-icons/fi";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 relative z-20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
        
        <p>
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        <p className="flex items-center gap-2">
          Built with Next.js <FiHeart className="text-red-500" />
        </p>

      </div>
    </footer>
  );
}
