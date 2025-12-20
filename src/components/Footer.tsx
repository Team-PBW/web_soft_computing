import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/60 via-white to-white" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-600">Musifikasi</h2>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">Our vision is to provide convenience and help increase your sales business with intelligent music-driven experiences.</p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-400">About</h3>
            <ul className="space-y-4 text-sm">
              {["How it works", "Featured"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group inline-flex items-center gap-1 text-gray-600 transition hover:text-gray-900">
                    {item}
                    <span className="h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-400">Community</h3>
            <ul className="space-y-4 text-sm">
              {["Events", "Blog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group inline-flex items-center gap-1 text-gray-600 transition hover:text-gray-900">
                    {item}
                    <span className="h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-400">Socials</h3>
            <ul className="space-y-4 text-sm">
              {["Discord", "Instagram"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group inline-flex items-center gap-1 text-gray-600 transition hover:text-gray-900">
                    {item}
                    <span className="h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
          <p>© 2025 Musifikasi. All rights reserved.</p>

          <div className="flex gap-6">
            {["Privacy & Policy", "Terms & Condition"].map((item) => (
              <Link key={item} href="#" className="transition hover:text-gray-900">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
