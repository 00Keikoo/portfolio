// =====================================================================
//  Semua isi website ada di file ini. Ubah teks di sini untuk mengganti
//  konten; tidak perlu menyentuh file komponen.
// =====================================================================

export type Project = {
  title: string;
  description: string;
  stack: string[];
  filters: string[];
  image?: string;
  links?: { label: string; href: string }[];
  note?: string;
};

export type Education = {
  institution: string;
  major: string;
  period: string;
  url?: string;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  points: string[];
};

export type Skill = { name: string; level: 1 | 2 | 3 };

export const profile = {
  name: "Andika Zafka Ujfaluzi",
  shortName: "Dika",
  role: "Backend & Fullstack Web Developer",
  status: "Open to opportunity",
  intro:
    "Mahasiswa Teknik Informatika PENS yang berfokus pada backend development dan machine learning. Berpengalaman membangun aplikasi web fullstack, men-deploy sistem di VPS, dan tertarik pada backend yang scalable, otomasi, serta fintech.",
  location: "Surabaya, Jawa Timur, Indonesia",
  email: "andikazafka04@gmail.com",
  photo: "/fotoprofil.jpeg",
  cv: "/cv.pdf",
  socials: {
    github: { label: "00Keikoo", href: "https://github.com/00Keikoo" },
    linkedin: { label: "Andika Zafka", href: "https://www.linkedin.com/in/andika-zafka" },
  },
  about: [
    "Saya mahasiswa Teknik Informatika di **Politeknik Elektronika Negeri Surabaya (PENS)** yang fokus pada **backend development** dan **machine learning systems**. Saya terbiasa membangun aplikasi web fullstack dari nol hingga deployment di VPS.",
    "Ketertarikan saya ada di scalable backend systems, automation, dan fintech applications. Di luar koding, saya aktif berkontribusi di kepanitiaan organisasi mahasiswa HIMIT PENS.",
  ],
};

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 3 },
      { name: "Express.js", level: 3 },
      { name: "FastAPI", level: 2 },
      { name: "ASP.NET", level: 2 },
      { name: "REST API", level: 3 },
      { name: "PostgreSQL", level: 3 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 2 },
      { name: "Next.js", level: 2 },
      { name: "Flutter", level: 1 },
      { name: "JavaScript", level: 3 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 2 },
      { name: "Linux", level: 3 },
      { name: "Git / GitHub", level: 3 },
      { name: "VPS Deployment", level: 2 },
      { name: "Python", level: 2 },
      { name: "Java", level: 1 },
      { name: "C", level: 1 },
    ],
  },
];

export const projectFilters = ["Fullstack", "Backend", "Mobile"];

export const projects: Project[] = [
  {
    title: "QualiTrack — Audit Management System",
    description:
      "Sistem manajemen audit untuk enterprise di bawah PT Sindika. Saya membangun backend system untuk penjadwalan dan manajemen audit menggunakan ASP.NET, merancang skema database PostgreSQL, dan mengembangkan RESTful API serta business logic untuk enterprise workflow system.",
    stack: ["ASP.NET", "C#", "PostgreSQL", "REST API", "Clean Architecture"],
    filters: ["Backend"],
    image: "/project/qualitrack.jpeg",
    note: "Backend Developer · April 2026 — sekarang",
  },
  {
    title: "Automotive Catalog Website",
    description:
      "Website katalog otomotif fullstack untuk listing dan promosi kendaraan. Menerapkan UI responsif, tampilan produk dinamis, serta konfigurasi deployment dan hosting untuk aksesibilitas online.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    filters: ["Fullstack"],
    image: "/project/otomotif.png",
    note: "Maret 2026",
  },
  {
    title: "BookRoom — Room Booking App",
    description:
      "Aplikasi web pemesanan ruangan dengan arsitektur fullstack. Mengimplementasikan backend logic, integrasi database, dan fitur manajemen pemesanan, serta merancang antarmuka ramah pengguna untuk penjadwalan dan reservasi ruangan.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    filters: ["Fullstack"],
    image: "/project/bookruang.png",
    note: "Februari 2026",
  },
];

export const education: Education[] = [
  {
    institution: "Politeknik Elektronika Negeri Surabaya",
    major: "Teknik Informatika",
    period: "Agustus 2024 — sekarang",
    url: "https://www.pens.ac.id/",
  },
  {
    institution: "SMA Negeri 1 Sekaran",
    major: "IPA (Ilmu Pengetahuan Alam)",
    period: "Juli 2021 — Juni 2024",
  },
];

export const educationNote =
  "Di PENS saya aktif mengembangkan keterampilan teknis maupun kepemimpinan melalui kegiatan organisasi dan kepanitiaan.";

export const experiences: Experience[] = [
  {
    role: "Health Coordinator — HIMIT Outbound Event",
    organization: "HIMIT PENS",
    period: "Oktober 2026",
    points: [
      "Mengoordinasikan persiapan dan pengaturan kesehatan untuk mendukung peserta dan panitia selama acara outbound dua hari.",
      "Memantau kondisi kesehatan peserta dan panitia serta memberikan pertolongan pertama bagi yang sakit selama acara.",
      "Mengorganisir dukungan kesehatan dan mengoordinasikan respons tim terhadap kebutuhan medis demi menjaga lingkungan acara yang aman.",
    ],
  },
  {
    role: "Anggota Panwaslu (Panitia Pengawas Pemilu)",
    organization: "HIMIT PENS",
    period: "April 2026",
    points: [
      "Mengawasi dan memastikan transparansi seluruh proses pemilihan yang melibatkan ratusan pemilih mahasiswa.",
      "Memverifikasi kelayakan calon dan dokumen administratif untuk kandidat presiden himpunan.",
      "Menangani dan menyelesaikan pelanggaran aturan kampanye secara tidak memihak sesuai regulasi pemilu kampus.",
      "Memantau penghitungan suara dan memvalidasi hasilnya untuk memastikan pemilu yang adil dan akurat.",
    ],
  },
  {
    role: "Marketing Executive",
    organization: "Toyota Liek Motor",
    period: "2025 — 2026",
    points: [
      "Membantu pelanggan dalam memilih produk kendaraan Toyota yang sesuai kebutuhan.",
      "Mengelola komunikasi pelanggan dan aktivitas follow-up.",
      "Mendukung aktivitas promosi dan penjualan di industri otomotif.",
      "Mengembangkan keterampilan komunikasi, negosiasi, dan pengelolaan hubungan pelanggan.",
    ],
  },
  {
    role: "Lead Generator — Freelance",
    organization: "Automotive Used Car Sales",
    period: "Februari — Juni 2025",
    points: [
      "Menghasilkan dan memkualifikasi leads pelanggan untuk penjualan mobil bekas melalui platform digital (Facebook Marketplace).",
      "Mengelola komunikasi pelanggan dan proses follow-up penjualan.",
      "Berkontribusi pada lebih dari 12 transaksi kendaraan yang berhasil dengan menghubungkan pembeli ke inventori showroom.",
    ],
  },
];

export const certifications = [
  { name: "AWS Academy Graduate — Cloud Foundations", issuer: "Amazon Web Services Training and Certification", year: "2026" },
];
