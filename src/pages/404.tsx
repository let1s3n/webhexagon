import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-400 mb-8">Oops, página no encontrada</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold no-underline hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all"
      >
        <ArrowLeft className="w-5 h-5" /> Regresar al inicio
      </Link>
    </div>
  );
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return page;
};
