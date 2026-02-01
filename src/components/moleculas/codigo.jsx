import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-twilight.css";

export default function Codigo({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="relative my-6 rounded-lg border border-slate-200 dark:border-slate-700/60 overflow-hidden bg-slate-50 dark:bg-transparent">
      <button
        onClick={handleCopy}
        type="button"
        className={`
          absolute top-3 right-3 z-10
          text-xs px-2.5 py-1.5 rounded
          transition-colors cursor-pointer
          ${copied ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-600 hover:text-sky-600 hover:bg-slate-300 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:text-sky-300 dark:hover:bg-slate-700"}
        `}
      >
        {copied ? "Copiado" : "Copiar"}
      </button>
      <pre className="bg-slate-100 dark:bg-slate-900/60 text-sm overflow-x-auto p-4 pr-24 text-slate-700 dark:text-slate-300">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
