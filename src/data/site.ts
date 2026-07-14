export const siteConfig = {
  name: "Vignesh Infinity Academy",
  shortName: "VIA",
  description:
    "Offline tuition for Classes 1–12 and online Mathematics classes for 10th, 11th and 12th under the Tamil Nadu Board of Secondary Education, plus practical computer courses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vigneshinfinityacademy.vercel.app",
  phone: "+918122753620",
  phoneDisplay: "81227 53620",
  email: "vigneshinfinityacademy@gmail.com",
  location: "Muhavur, Rajapalayam, Tamil Nadu, India",
  serviceArea: "Tamil Nadu, India",
  whatsappMessage:
    "Hello Vignesh Infinity Academy, I would like to know more about the courses and admission details.",
  socials: {
    instagram: "https://www.instagram.com/vignesh_infinity_academy?igsh=MW1ueGducDAyY242Yg==",
    facebook: "https://www.facebook.com/share/1DmmLDS1vz/",
    youtube: "https://www.youtube.com/@vigneshinfinityacademy",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
