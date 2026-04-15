export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Screen Replacement",
    description: "Cracked screen? OLED/LCD repair, original quality with tempered glass option.",
    icon: "fa-mobile-alt",
    image: "/images/screen-repair.jpg"
  },
  {
    id: 2,
    title: "Battery Replacement",
    description: "High-cycle batteries, fast charging restored, full calibration included.",
    icon: "fa-battery-full",
    image: "/images/battery-repair.jpg"
  },
  {
    id: 3,
    title: "Water Damage Repair",
    description: "Ultrasonic cleaning, corrosion removal, component-level restoration.",
    icon: "fa-water",
    image: "/images/waterdamage.webp"
  },
  {
    id: 4,
    title: "Button / Mic Repair",
    description: "Power/volume buttons, microphone, speaker fixes with genuine parts.",
    icon: "fa-microphone-alt",
    image: "/images/button-repair.jpg"
  },
  {
    id: 5,
    title: "Diagnostic Scan",
    description: "Full hardware & software diagnosis, free check with detailed report.",
    icon: "fa-microchip",
    image: "/images/diagnostic.jpg"
  },
  {
    id: 6,
    title: "Charge Port Repair",
    description: "Broken charging port, loose connection, fast fix with original components.",
    icon: "fa-plug",
    image: "/images/charge-port.jpg"
  },
  {
    id: 7,
    title: "Camera Repair",
    description: "Blurry lens, OIS restoration, front/back camera replacement.",
    icon: "fa-camera",
    image: "/images/camera-repair.jpg"
  },
  {
    id: 8,
    title: "Software Updates & Fixes",
    description: "iOS/Android updates, boot loop repair, data recovery services.",
    icon: "fa-code-branch",
    image: "/images/software-repair.jpg"
  }
];