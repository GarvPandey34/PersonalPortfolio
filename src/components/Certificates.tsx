import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, memo } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { GoogleDriveImage } from "./GoogleDriveImage";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  credentialUrl?: string;
  imageUrl?: string;
}

const certificates: Certificate[] = [
  // AWS
  {
    id: 1,
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    category: "AWS",
    description:
      "Completed AWS Academy Cloud Foundations course covering core AWS services, cloud architecture, security, and best practices.",
    credentialUrl:
      "https://drive.google.com/file/d/1c3nCLDbFysJf6YqBdTvx7_joWejeV8aS/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1cnG2ntxtyoldA6sbh_4Qpk_Y1Xl9QGHh",
  },

  // Coursera Certificates
  {
    id: 2,
    title: "AI, Business & the Future of Work",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Understanding the impact of AI on business operations and future workplace dynamics.",
    credentialUrl:
      "https://drive.google.com/file/d/1d0ntMcCtKkew-Dh6GsqE8aJouxUWLokD/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1iaDwp3Jmz2RaVzT9DA-R1L6pYRahBlts",
  },
  {
    id: 3,
    title: "AI, Empathy & Ethics",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Exploring ethical considerations and empathetic design in AI development.",
    credentialUrl:
      "https://drive.google.com/file/d/17OOM2lWofuPo-Q6F1ad418BG-o5u4cVZ/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1hmAOxO7BdE97AgmYK1MwDCHkqZR_xg2_",
  },
  {
    id: 4,
    title: "Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "2023",
    category: "Coursera",
    description:
      "Comprehensive course on computer networking fundamentals, protocols, and infrastructure.",
    credentialUrl:
      "https://drive.google.com/file/d/1iAhY8QGH4Z48JHMPQ6vgkqCVvxw7JvRE/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1WGhHdUOQNLvBAR8rVRgSU_fxYmIBWqTL",
  },
  {
    id: 5,
    title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Hands-on experience building AI-powered applications using OpenAI technologies.",
    credentialUrl:
      "https://drive.google.com/file/d/1uVUfOYlG2-qzTHPz6wi7YzKnxuAZp0wE/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1nxIAMpN98Wlke-PxvrrAO-l6CLrnzVos",
  },
  {
    id: 6,
    title: "ChatGPT for Beginners: SciFi Writing with Dall-E",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Creative writing and content generation using ChatGPT and Dall-E.",
    credentialUrl:
      "https://drive.google.com/file/d/1SXKcgSQ2sOawL9NDUwJqi4ifeaar3TaG/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=19H6891KFjwN4X9_u8q8JuE3iPImiD4EY",
  },
  {
    id: 7,
    title: "Computer Vision",
    issuer: "Coursera",
    date: "2024",
    category: "Coursera",
    description:
      "Fundamentals of computer vision, image processing, and deep learning applications.",
    credentialUrl:
      "https://drive.google.com/file/d/1GJ64xD2Fm46vafxnK9rGQgK7QiY4WWP7/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Af-GuoJs8rz1GMqngHKAsWlZJt4vRw_f",
  },
  {
    id: 8,
    title: "Data Privacy Fundamentals",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Understanding data privacy regulations, compliance, and best practices.",
    credentialUrl:
      "https://drive.google.com/file/d/1EIV1Ww1PfH0p6OmDzn-fgg9U8XRJ91C5/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1ETwPQtQsq1bkvSO_dQX-ibxDx0g-yaJa",
  },
  {
    id: 9,
    title: "Data Science Ethics",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Ethical considerations in data science, bias mitigation, and responsible AI.",
    credentialUrl:
      "https://drive.google.com/file/d/1nbMEEhLxk_0r-niwvKFYKiigkVWCxG8m/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1uauTuXl7NQ6ZnIKs9o3ILKYCYPUAaNZ6",
  },
  {
    id: 10,
    title: "Developing Data Models with LookML",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Building data models and analytics solutions using Looker and LookML.",
    credentialUrl:
      "https://drive.google.com/file/d/1foM4POiEsAKR174G3alHqYyaVpNELIby/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Yh7aFvAu3TAJudZc-jJrN7aHw8mPlzwm",
  },
  {
    id: 11,
    title: "Digital Transformation with Google Cloud",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Understanding digital transformation strategies using Google Cloud Platform.",
    credentialUrl:
      "https://drive.google.com/file/d/1cPbdQfKgWRJPxGd3YI_vdG3zrwdSRIkQ/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1t_6PXGWnTa9yfBQTnfy5Rn8Jskx7eQop",
  },
  {
    id: 12,
    title: "Introduction to Generative AI",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Foundational understanding of generative AI models and applications.",
    credentialUrl:
      "https://drive.google.com/file/d/1e1oencKaLhY09Zh-zsNtpZheYPosfVfL/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Y-I9z_NrwZJ65E9lES8bTIXeviFhBLSp",
  },
  {
    id: 13,
    title:
      "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    date: "2023",
    category: "Coursera",
    description:
      "Introduction to programming concepts and Python fundamentals.",
    credentialUrl:
      "https://drive.google.com/file/d/1Q7sYHwW-kCitZqbNtMqM5pgbPrV0N5Rw/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Y-I9z_NrwZJ65E9lES8bTIXeviFhBLSp",
  },
  {
    id: 14,
    title: "Python Data Structures",
    issuer: "Coursera",
    date: "2023",
    category: "Coursera",
    description:
      "Deep dive into Python data structures, algorithms, and problem-solving.",
    credentialUrl:
      "https://drive.google.com/file/d/1LIHkmA2c-HU-VhDKCtgPtvVeri0yYlpx/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1csnOdYOpsiRgEqG0GweBrvJDFMOf_853",
  },
  {
    id: 15,
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "2023",
    category: "Coursera",
    description:
      "Comprehensive Python programming course covering core concepts to advanced topics.",
    credentialUrl:
      "https://drive.google.com/file/d/1TA9ty99OpsP76N4xGW08sOxY3RR4EZoL/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1OhcnmEmZFNdc7ERYUQJpvgHD6nVj-Ir-",
  },
  {
    id: 16,
    title:
      "Retrieving, Processing and Visualizing Data with Python",
    issuer: "Coursera",
    date: "2023",
    category: "Coursera",
    description:
      "Working with data: retrieval, processing, analysis, and visualization using Python.",
    credentialUrl:
      "https://drive.google.com/file/d/1BaXw6GpB9apEvKjjHYjmTHBFf0R9JnCG/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1f-mSZmk9fnVf97wmvHJ5gQEAIVzRyYnr",
  },
  {
    id: 17,
    title: "Use Canva to Create an Interactive Mind Map",
    issuer: "Coursera",
    date: "2025",
    category: "Coursera",
    description:
      "Design thinking and visual communication using Canva tools.",
    credentialUrl:
      "https://drive.google.com/file/d/1ukXycFJ5sd5PdZoZ87Q1Pzcp8tevsc0H/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=10yIEPjPjQ73cUqUibDPIUD3UpCV6aTAe",
  },
  {
    id: 18,
    title: "Using Database with Python",
    issuer: "Coursera",
    date: "2023",
    category: "Coursera",
    description:
      "Database management and SQL integration with Python applications.",
    credentialUrl:
      "https://drive.google.com/file/d/1Dp4Be4pfYkBjAta-y8VoCWm-lPHPGshC/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1nzDPqLFRybKZZ7Hb0SWCQtwBLKQ6e2hb",
  },
  {
    id: 19,
    title: "Using Python to Access Web Data",
    issuer: "Coursera",
    date: "2023",
    category: "Coursera",
    description:
      "Web scraping, APIs, and data extraction techniques using Python.",
    credentialUrl:
      "https://drive.google.com/file/d/1bFnrxDXPVrRwklfNaKnztdma3otOqPRp/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1ie2Ii1Me_nsfgpoE444jNf_WKKixP79C",
  },

  // IBM SkillsBuild
  {
    id: 20,
    title: "Web Development Basics",
    issuer: "IBM SkillsBuild",
    date: "2025",
    category: "IBM SkillsBuild",
    description:
      "Foundational web development skills covering HTML, CSS, and JavaScript basics.",
    credentialUrl:
      "https://drive.google.com/file/d/1t2WCZe3vZbsKpPmd1-4c3YaBArPa7Syq/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1f9wFJWbIRRYBO0vAoeGLhi8i3vxYsynu",
  },
  {
    id: 21,
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    category: "IBM SkillsBuild",
    description:
      "Comprehensive web development fundamentals including responsive design and best practices.",
    credentialUrl:
      "https://drive.google.com/file/d/1O6rYVoqW2LW6RVuwn_gw5LS_KeK8ysrr/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1D0aG7QJjsBPk9wAsZ1H9zP6l5fuAAzcf",
  },
  {
    id: 22,
    title: "Web Development Fundamentals (Advanced)",
    issuer: "IBM SkillsBuild",
    date: "2025",
    category: "IBM SkillsBuild",
    description:
      "Advanced web development concepts and modern frameworks.",
    credentialUrl:
      "https://drive.google.com/file/d/1nIirlltz80uD6DzoknYsM1JbnWPL7oiN/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1-Hupl7UkZv9FlpPEybokNiQXIAv-2_hL",
  },

  // Miscellaneous
  {
    id: 23,
    title: "Knowledge Library Independence Certificate",
    issuer: "The Aditya Birla Public School, Kesrol",
    date: "2024",
    category: "Misc",
    description:
      "Recognition for independent learning and knowledge acquisition.",
    credentialUrl:
      "https://drive.google.com/file/d/1twrDTbKCBTdxQu-Fhra0x1ZEuNheo-H0/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=161CnJUd1KcF3Pek4YF1YwU0frAHkWTTs",
  },
  {
    id: 24,
    title: "PYTHON for Beginners",
    issuer: "DevTown",
    date: "2024",
    category: "Misc",
    description:
      "Comprehensive Python programming certification covering core to advanced concepts.",
    credentialUrl:
      "https://drive.google.com/file/d/12CarxaKDLAzEL-Upvtwa8wCwEtAUhy4V/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1wA4y73M3cVvfuhKVaS-FQkGAimgGZlxk",
  },
  {
    id: 25,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024",
    category: "Misc",
    description:
      "Complete responsive web design certification covering HTML, CSS, and accessibility.",
    credentialUrl:
      "https://drive.google.com/file/d/1b3aU4bkoiID5WAYFs5fD7IhJsrNCv65f/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1qLLScbPG75EVLSxKaoAQB7A5Ldh5OJJk",
  },
  {
    id: 26,
    title: "Technocalypse Certificate",
    issuer: "SAE Nirma Collegiate",
    date: "2024",
    category: "Misc",
    description:
      "Participation and achievement in Technocalypse technical event.",
    credentialUrl:
      "https://drive.google.com/file/d/1XCkQSjp6O1EMMx1k6o6vsDeWuPPC2OJ_/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1dsWgvajTr2Hd7Db3CE6zXw1OXM9mnfAG",
  },
  {
    id: 27,
    title: "Academic Integrity Certificate",
    issuer: "Central Vigilance Commission",
    date: "2022",
    category: "Misc",
    description:
      "Commitment to academic integrity and ethical standards.",
    credentialUrl:
      "https://drive.google.com/file/d/1sqyOgzfwf8YEaml14MSqVQMq3asfp7q9/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1TV849RWTH86D0OLyK1DuSsIG88VM3VLQ",
  },

  // PPSU
  {
    id: 28,
    title: "Oceanic Quest Certificate",
    issuer: "P P Savani University",
    date: "2024",
    category: "PPSU",
    description:
      "Achievement in Oceanic Quest competition/event.",
    credentialUrl:
      "https://drive.google.com/file/d/1TZeMqcVCxNxwZq56e07_Ruj_84j1Z3zn/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1VmCXW4Ee-NUFTydJkMwouv9uLopl4Y45",
  },
  {
    id: 29,
    title: "Techxpertise",
    issuer: "P P Savani University",
    date: "2022",
    category: "PPSU",
    description: "Technical expertise certification from PPSU.",
    credentialUrl:
      "https://drive.google.com/file/d/1I-aMVbJBsRzprNP84rAtlhiSbSGpTbXy/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1jZlfL4PyAwDA_RwkGe3Ob5PikwZNW_Vo",
  },

  // Product Management
  {
    id: 30,
    title: "Design Thinking",
    issuer: "HP Life",
    date: "2025",
    category: "Product Management",
    description:
      "Design thinking methodology for product innovation and user-centered design.",
    credentialUrl:
      "https://drive.google.com/file/d/1EBEqxDcaJlaCRLzfVSzHxQNQAbuPhx88/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1iOP-QXVG7JHlj1aaA3vTTNIkpt8r3Oc2",
  },
  {
    id: 31,
    title: "Artificial Intelligence Micro-Certification",
    issuer: "Product Management Institute",
    date: "2025",
    category: "Product School",
    description:
      "AI applications in product management and strategic decision-making.",
    credentialUrl:
      "https://drive.google.com/file/d/1Nx1QX7hJ7Dsx5jmPtwTHi_AGuu25ywQ7/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1qluRYGyFI81yxa68J9WBm2BethJmyRLw",
  },
  {
    id: 32,
    title: "Product Roadmapping Micro-Certification",
    issuer: "Product School",
    date: "2025",
    category: "Product Management",
    description:
      "Strategic product roadmapping, prioritization, and stakeholder communication.",
    credentialUrl:
      "https://drive.google.com/file/d/1WfWbHYULpM0vloMQ4Gjskz4mP4zbv8d7/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1QbUemy5kFhdbm8WU5wB6_7mOTQ09ac0y",
  },
  {
    id: 33,
    title: "Product Discovery Micro-Certification",
    issuer: "Product School",
    date: "2025",
    category: "Product Management",
    description:
      "User research, market analysis, and product discovery techniques.",
    credentialUrl:
      "https://drive.google.com/file/d/1B4g7y2FNW4iOG_RPL9h2R7VgE9Ohem92/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=15eb8oLZuRoxqkY-ifLJWNLQRDdBKuf7V",
  },
  {
    id: 34,
    title: "Product Experimentation Micro-Certification",
    issuer: "Product School",
    date: "2025",
    category: "Product Management",
    description:
      "A/B testing, experimentation frameworks, and data-driven product decisions.",
    credentialUrl:
      "https://drive.google.com/file/d/1QJ3MnSUW3fzof0c9BYD3bpuTQcs7zlHS/view?usp=drive_link",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1klgAztGXAPFpK1vV6EIPrfDk5IFImzBa",
  },
];

const categories = [
  "All",
  "Product Management",
  "Coursera",
  "AWS",
  "IBM SkillsBuild",
  "PPSU",
  "Misc",
];

export const Certificates = memo(function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [selectedCert, setSelectedCert] =
    useState<Certificate | null>(null);

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter(
          (cert) => cert.category === selectedCategory,
        );

  return (
    <>
      <section
        ref={ref}
        id="certificates"
        className="py-32 relative"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-sm tracking-widest text-[#5DADE2] uppercase mb-4">
              Credentials
            </div>
            <h2 className="text-4xl md:text-5xl text-[#F5F6F7] mb-6">
              Certificates & Achievements
            </h2>
            <p className="text-[#BDC3C7] max-w-2xl">
              A collection of certifications spanning product
              management, AI/ML, web development, and cloud
              technologies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 overflow-x-auto"
          >
            <div className="flex gap-3 pb-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#5DADE2] text-[#0C0E12]"
                      : "bg-[#141820] text-[#BDC3C7] border border-[#BDC3C7]/10 hover:border-[#5DADE2]/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                onClick={() => setSelectedCert(cert)}
                className="bg-[#141820] border border-[#BDC3C7]/10 rounded-2xl overflow-hidden hover:border-[#5DADE2]/30 transition-all cursor-pointer group"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1A1E26] to-[#141820]">
                  <GoogleDriveImage
                    imageUrl={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    fallbackIcon={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 p-2 bg-[#5DADE2]/10 backdrop-blur-sm rounded-lg">
                    <Award className="w-5 h-5 text-[#5DADE2]" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <div className="text-xs text-[#5DADE2] mb-2 uppercase tracking-wider">
                      {cert.category}
                    </div>
                    <h3 className="text-lg text-[#F5F6F7] mb-1 group-hover:text-[#5DADE2] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="text-sm text-[#BDC3C7]">
                      {cert.issuer}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#BDC3C7]">
                      {cert.date}
                    </div>
                    {cert.credentialUrl && (
                      <ExternalLink className="w-4 h-4 text-[#5DADE2] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-[#BDC3C7]"
          >
            Showing {filteredCertificates.length} of{" "}
            {certificates.length} certificates
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0C0E12]/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#141820] border border-[#BDC3C7]/20 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certificate Image */}
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-[#1A1E26] to-[#141820]">
              <GoogleDriveImage
                imageUrl={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full h-full object-cover opacity-95"
                fallbackIcon={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141820]/60 via-transparent to-transparent pointer-events-none" />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-[#141820]/80 backdrop-blur-sm hover:bg-[#BDC3C7]/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#F5F6F7]" />
              </button>
            </div>

            {/* Certificate Details */}
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#5DADE2]/10 rounded-lg">
                  <Award className="w-8 h-8 text-[#5DADE2]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#5DADE2] mb-2 uppercase tracking-wider">
                    {selectedCert.category}
                  </div>
                  <h3 className="text-2xl text-[#F5F6F7] mb-2">
                    {selectedCert.title}
                  </h3>
                  <div className="text-[#BDC3C7]">
                    {selectedCert.issuer}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-[#5DADE2] mb-2">
                    Issued
                  </div>
                  <div className="text-[#F5F6F7]">
                    {selectedCert.date}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-[#5DADE2] mb-2">
                    Description
                  </div>
                  <p className="text-[#BDC3C7] leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                {selectedCert.credentialUrl && (
                  <div>
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#5DADE2] text-[#0C0E12] rounded-xl transition-all hover:bg-[#4A9FD1] hover:shadow-lg hover:shadow-[#5DADE2]/20"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
});