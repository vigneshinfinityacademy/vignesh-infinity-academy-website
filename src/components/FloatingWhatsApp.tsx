import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Enquire through WhatsApp">
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
      <MessageCircle className="relative" size={27} />
    </a>
  );
}
