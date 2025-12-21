import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

export default function MainFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          <p className="text-sm text-gray-500">
            © 2025 Elite Atheis, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-gray-500">
            <FaFacebookF className="h-5 w-5 cursor-pointer hover:text-gray-900" />
            <FaInstagram className="h-5 w-5 cursor-pointer hover:text-gray-900" />
            <FaXTwitter className="h-5 w-5 cursor-pointer hover:text-gray-900" />
            <FaGithub className="h-5 w-5 cursor-pointer hover:text-gray-900" />
            <FaYoutube className="h-5 w-5 cursor-pointer hover:text-gray-900" />
          </div>

        </div>
      </div>
    </footer>
  );
}
