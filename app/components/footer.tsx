"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p className="mb-2">
          © {currentYear} <span className="font-medium text-slate-400">Sagar Patkar</span>. All rights reserved.
        </p>
        <p>
          Designed and developed by <span className="font-medium text-slate-400">Sagar Patkar</span> using{" "}
          <a
              href="https://nextjs.org/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Next.js (opens in a new tab)"
          >
            Next.js
          </a>
          ,{" "}
          <a
              href="https://tailwindcss.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Tailwind CSS (opens in a new tab)"
          >
            Tailwind CSS
          </a>
          , and{" "}
          <a
              href="https://vercel.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercel (opens in a new tab)"
          >
            deployed on Vercel
          </a>
          . Coded with ❤️ in{" "}
          <a
              href="https://code.visualstudio.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visual Studio Code"
          >
            VS Code
          </a>
          .
        </p>
      </footer>
  );
};

export default Footer;
