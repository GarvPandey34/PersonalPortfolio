import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, memo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { GoogleDriveImage } from "./GoogleDriveImage";

const projects = [
  {
    id: 1,
    title: "Arc Flash Monitoring System",
    category: "Industrial Safety · Data Visualization",
    description:
      "Developed during internship at Hindalco Industries — an IoT-powered Arc Flash Monitoring System that detects, analyzes, and visualizes real-time safety events to reduce risk and improve operational safety.",
    image:
      "https://images.unsplash.com/photo-1593854519602-687eae339d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50JTIwUFBFfGVufDF8fHx8MTc2MjU4MzE3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: [
      "IoT",
      "Flask",
      "Data Analytics",
      "Industrial Safety",
    ],
    metrics: [
      "25% improvement in safety response time",
      "Real-time visualization dashboard",
      "Recognized by Hindalco Safety Division",
    ],
  },
  {
    id: 2,
    title: "MarTech — Smart Checkout System",
    category: "IoT & Automation · Product Management",
    description:
      "Built an RFID-based retail checkout prototype as part of a MarTech initiative to automate in-store billing and enhance user experience. Focused on defining product flow, prototyping, and usability testing.",
    image:
      "https://images.unsplash.com/photo-1740150884358-5a254d7ae5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBjaGVja291dCUyMHNlbGYtc2VydmljZXxlbnwxfHx8fDE3NjI1ODMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: [
      "Product Thinking",
      "RFID",
      "Prototyping",
      "UX Research",
    ],
    metrics: [
      "Reduced checkout time by 40%",
      "Validated with 10+ test users",
      "Prototype demoed in university tech expo",
    ],
  },
  {
    id: 3,
    title: "Urban Kissan",
    category: "AI & UX Design · Hackathon Project",
    description:
      "Developed during a university hackathon — Urban Kissan is an AI-powered crop health tracking platform that analyzes uploaded crop images to detect health issues based on seasonal and environmental factors. Designed an intuitive user interface for farmers to easily track reports and receive actionable insights.",
    image:
      "https://images.unsplash.com/photo-1591117610713-0632efed0f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwaGVhbHRoJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2MjU4MzgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: [
      "Figma",
      "AI Integration",
      "UX Research",
      "Hackathon",
    ],
    metrics: [
      "Built and presented within 4 hours at a university hackathon",
      "AI-based detection of crop health and seasonal patterns",
      "Simplified UX for farmers to access real-time health reports",
    ],
  },
  {
    id: 4,
    title:
      "Personal Portfolio Website — Infinite Scroll & Interactive Design",
    category: "Frontend Development · Product Design",
    description:
      "Designed and developed a personal portfolio website that reflects my product thinking, design clarity, and front-end craft. The site features an infinite scroll experience with smooth animations, horizontal transitions, and subtle background gradients inspired by Apple’s calm aesthetic and Linear’s structured motion.",
    image:
      "https://drive.google.com/file/d/1ltT4fXqK-2UwCl6q8GRww1pUvQH6O7sV/view?usp=drive_link",
    tags: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Figma",
      "Vercel",
      "Frontend Architecture",
    ],
    metrics: [
      "Built a fully responsive infinite-scroll layout with background gradient blending",
      "Integrated smooth section reveals and cursor-based glow animations",
      "Deployed on Vercel with optimized performance and asset compression",
    ],
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    category:
      "Recommendation System · Machine Learning · Python Project ",
    description:
      "An ML-powered recommendation platform that suggests movies based on user input using cosine similarity and CountVectorizer. The system analyzes datasets of multiple years, displaying cast, genre, and movie details through a custom-built web page.",
    image:
      "https://images.unsplash.com/photo-1760404699867-bdf4f2b19fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwc3RyZWFtaW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjU4NDg4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: [
      "Machine Learning",
      "Recommendation System",
      "Python",
      "Data Science",
    ],
    metrics: [
      "Used CountVectorizer and cosine_similarity for text-based recommendations",
      "Processed movie datasets across three years with cast and crew details",
      "Delivered real-time movie suggestions via a Flask web interface",
    ],
  },
];

export const Projects = memo(function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [hoveredId, setHoveredId] = useState<number | null>(
    null,
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-sm tracking-widest text-[#5DADE2] uppercase mb-4">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl text-[#F5F6F7] mb-6">
            Projects That Tell Stories
          </h2>
          <p className="text-[#BDC3C7] max-w-2xl">
            Each project is a journey from problem to solution,
            combining strategic thinking, thoughtful design, and
            technical execution.
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-8 min-w-max">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="w-[500px] group cursor-pointer"
                >
                  <div className="bg-[#141820] border border-[#BDC3C7]/10 rounded-2xl overflow-hidden hover:border-[#5DADE2]/30 transition-all">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0C0E12]">
                      <motion.div
                        className="w-full h-full"
                        animate={{
                          scale:
                            hoveredId === project.id ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {project.id === 4 ? (
                          <GoogleDriveImage
                            imageUrl={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            fallbackIcon={false}
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141820] to-transparent opacity-60" />

                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity:
                            hoveredId === project.id ? 1 : 0,
                        }}
                        className="absolute inset-0 bg-[#5DADE2]/10 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <button className="p-3 bg-[#F5F6F7] rounded-full hover:bg-[#5DADE2] transition-colors">
                          <Github className="w-5 h-5 text-[#0C0E12]" />
                        </button>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="text-sm text-[#5DADE2] mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-2xl text-[#F5F6F7] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-[#BDC3C7] mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#5DADE2]/10 text-[#5DADE2] rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="border-t border-[#BDC3C7]/10 pt-6 grid grid-cols-3 gap-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-[#F5F6F7]">
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-[#BDC3C7]/60 mt-4"
          >
            ← Scroll to explore all projects →
          </motion.div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `,
        }}
      />
    </section>
  );
});