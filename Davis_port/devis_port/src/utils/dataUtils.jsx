import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import sketchImage from "../assets/notebook.png";
import responsiveImage from "../assets/responsive-design.png";
import UiImage from "../assets/ui-design1.png";
import motionImage from "../assets/motion-graphic1.png";
import appImage from "../assets/mobile.png";
import productImage from "../assets/product-design.png";
import Skills from "../Pages/Skills";

export const navItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "resume", text: "Resume" },
  { href: "portfolio", text: "Portfolio" },
  { href: "blogs", text: "Blog" },
  { href: "contact", text: "Contact" },
];

export const mobileNavItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "resume", text: "Resume" },
  { href: "portfolio", text: "Portfolio" },
  { href: "blogs", text: "Blog" },
  { href: "contact", text: "Contact" },
  { href: "services", text: "Services" },
  { href: "skills", text: "Skills" },
];

export const reviewItems = [
  {
    name: "Richard Miles",
    position: "Chaiman",
    img: client1,
    review:
      "Adept at coding languages and frameworks, demonstrating proficiency in front-end and back-end development. Capable of crafting dynamic and user-friendly websites with clean, efficient code.",
  },
  {
    name: "Vesta Shufelt",
    position: "Executive Director",
    img: client2,
    review:
      "Excellent communicator who works seamlessly within teams, understanding client needs and delivering tailored solutions promptly.",
  },
  {
    name: "Joseph Alves",
    position: "Managing Director",
    img: client3,
    review:
      " Exhibits creativity in troubleshooting and implementing unique features, ensuring optimal functionality and user experience.",
  },
];

export const serviceItems = [
  {
    icon: sketchImage,
    title: "Sketches",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: UiImage,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: productImage,
    title: "Product Design",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: appImage,
    title: "App Design",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: motionImage,
    title: "Motion Graphics",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    icon: responsiveImage,
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
];

export const skillsItems = [
  { title: "Photoshop", level: 95 },
  { title: "Motion Graphics", level: 75 },
  { title: "Adobe XD", level: 90 },
  { title: "UX Design", level: 85 },
  { title: "HTML", level: 80 },
  { title: "Digital Marketing", level: 90 },
];

export const experienceItems = [
  {
    title: "Senior UX/UI Designer",
    date: "Jan 2020 - Present",
    place: "Bergnaum, Hills and Howe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
  {
    title: "Product Designer",
    date: "Jan 2016 - December 2019",
    place: "Langosh, Sipes and Raynor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
  {
    title: "UX/UI Designer",
    date: "Jan 2014 - December 2015",
    place: "Strosin, Maggio and Homenick",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
];



export const educationItems = [
  {
    title: "Master of Computer Science",
    date: "2015 - 2016",
    place: "University of XYZ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
  {
    title: "Bachelor of Computer Science",
    date: "2010 - 2014",
    place: "University of ABC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
  {
    title: "Diploma in Computer Science",
    date: "2007 - 2010",
    place: "XYZ Institution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
];
