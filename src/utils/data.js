import { nanoid } from "nanoid";

export const navLinks = [
  {
    id: nanoid(),
    text: "الرئيسية",
    path: "#",
  },
  {
    id: nanoid(),
    text: "كيف يعمل",
    path: "#how-it-works",
  },
  {
    id: nanoid(),
    text: "الآراء",
    path: "#opinions",
  },
  {
    id: nanoid(),
    text: "مميزاتنا",
    path: "#features",
  },
  {
    id: nanoid(),
    text: "تواصل معنا",
    path: "#contact",
  },
];

export const howItWorks = [
  {
    id: nanoid(),
    title: "الخطوة الأولي : ",
    text: "تحديد تفاصيل السيارة ",
    image: "/assets/icons/step-1.svg",
  },
  {
    id: nanoid(),
    title: "الخطوة الثانية :",
    text: "تحديد بيانات ومحل إقامة كل من المشتري والبائع ",
    image: "/assets/icons/step-2.svg",
  },
  {
    id: nanoid(),
    title: "الخطوة الثالثة :",
    text: "تقديم كل الأوراق الخاصه بالسيارة (كشهادة براءة الذمة وشهادة المخالفات)",
    image: "/assets/icons/step-3.svg",
  },
  {
    id: nanoid(),
    title: "الخطوة الرابعة :",
    text: "تحديد المبلغ المحدد وطريقة الدفع",
    image: "/assets/icons/step-4.svg",
  },
  {
    id: nanoid(),
    title: "الخطوة الخامسة :",
    text: "تأكيد عملية الدفع ",
    image: "/assets/icons/step-5.svg",
  },
];

export const clients = [
  {
    id: nanoid(),
    title: "يوصي به",
    text: "ساعدني في نقل ملكية السيارة الجديدة دون الحاجة للذهاب الي المررو",
    image: "/assets/images/client-1.png",
    calender: "4/1",
    rate: "4.6/5",
    name: "Seif Mahmoud",
  },
  {
    id: nanoid(),
    title: "يوصي به",
    text: "هذا التطبيق مفيد ويساعد في تقليل الازدحام المروري والازحام علي منافذ وحدات الترخيص",
    image: "/assets/images/client-2.png",
    calender: "1/1",
    rate: "4/5",
    name: "Sandy Hassan",
  },
  {
    id: nanoid(),
    title: "يوصي به",
    text: "تطبيق آمن وسريع ويتيميز بواجهة استخدام سهلة وبسيطة ",
    image: "/assets/images/client-3.png",
    calender: "10/1",
    rate: "4.9/5",
    name: "Sara Ahmed",
  },
];

export const features = [
  {
    id: nanoid(),
    text: "واجهة استخدام سهلة وبسيطة",
    image: "/assets/icons/phone.svg",
  },
  {
    id: nanoid(),
    text: "الأمان والخصوصية",
    image: "/assets/icons/security.svg",
  },
  {
    id: nanoid(),
    text: "إصدار إيصالات رسمية لتأكيد استلام الدفع",
    image: "/assets/icons/certificate.svg",
  },
  {
    id: nanoid(),
    text: "دقة البيانات",
    image: "/assets/icons/database.svg",
  },
  {
    id: nanoid(),
    text: "إمكانية تتبع طلب نقل الملكية",
    image: "/assets/icons/tracking.svg",
  },
  {
    id: nanoid(),
    text: "وجود دعم فني للحالات الطارئة أثناء عملية النقل",
    image: "/assets/icons/support.svg",
  },
];

export const contact = [
  {
    id: nanoid(),
    image: "/assets/icons/call.svg",
    title: " الهاتف المحمول:",
    text: "912-798-2318",
  },
  {
    id: nanoid(),
    image: "/assets/icons/email.svg",
    title: "البريد الالكتروني:",
    text: "hello@engaz.design",
  },
  {
    id: nanoid(),
    image: "/assets/icons/location.svg",
    title: "العنوان:",
    text: "مصر-الدقهلية-المنصورة",
  },
];

export const footerLinks = [
  {
    id: nanoid(),
    title: "اللينكات السريعة",
    links: [
      { id: nanoid(), path: "#", text: "الرئيسية" },
      { id: nanoid(), path: "#", text: "كيف يعمل" },
      { id: nanoid(), path: "#", text: "الآراء" },
      { id: nanoid(), path: "#", text: "تواصل معنا" },
    ],
  },
  {
    id: nanoid(),
    title: "الدعم الفني",
    links: [
      { id: nanoid(), path: "#", text: "المساعدة & الدعم" },
      { id: nanoid(), path: "#", text: "سياسة الخصوصية" },
      { id: nanoid(), path: "#", text: "الشروط والأحكام" },
    ],
  },
];

// export const footerLinks = [
//   {
//     title: "وصول سريع",
//     links: [
//       {
//         name: "الرئيسية",
//         link: "#",
//       },
//       {
//         name: "المواقع",
//         link: "#",
//       },
//       {
//         name: "تواصل معنا",
//         link: "#",
//       },
//       {
//         name: "من نحن",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "من نحن",
//     links: [
//       {
//         name: "عن توليفاي",
//         link: "#",
//       },
//       {
//         name: "الرؤية",
//         link: "#",
//       },
//       {
//         name: "الهدف",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "المساعدة",
//     links: [
//       {
//         name: "الاسئلة الشائعة",
//         link: "#",
//       },
//       {
//         name: "مركز المساعدة",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "تواصل معنا",
//     links: [
//       {
//         name: "Tooliffycontact@gmail.com",
//         link: "#",
//         img: " /assets/icons/Mail.svg",
//       },
//       {
//         name: " +201020304050  ",
//         link: "#",
//         img: "/assets/icons/call.svg",
//         social: [
//           {
//             icon: " assets/icons/google.svg",
//             Link: "#",
//           },
//           {
//             icon: " assets/icons/facebook.svg",
//             Link: "#",
//           },
//           {
//             icon: " assets/icons/whatsapp.svg",
//             Link: "#",
//           },
//           {
//             icon: " assets/icons/linkedin.png",
//             Link: "#",
//           },
//         ],
//       },
//     ],
//   },
// ];
