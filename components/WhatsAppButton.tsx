import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5491169901355";
const WHATSAPP_MESSAGE =
  "Hola Casa Uno, quiero consultar por un viaje a Argentina.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp al 11 6990-1355"
      className="group fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a45a]/45 bg-[#132017]/95 text-[#f7f1e8] shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_24px_rgba(37,211,102,0.14)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#d6b567] hover:bg-[#17341f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b567] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090907] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25d366]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <MessageCircle
        aria-hidden="true"
        className="relative h-6 w-6 sm:h-7 sm:w-7"
        strokeWidth={1.8}
      />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
