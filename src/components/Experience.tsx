import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, memo } from "react";
import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Tech Intern",
    company: "Hindalco Industries Limited, Dahej",
    period: "August 2025 - November 2025",
    description:
      "Contributed to the development of an Arc Flash Risk Assessment and Monitoring System aimed at improving workplace electrical safety through real-time analytics and visualization.",
    outcomes: [
      "Collaborated with the safety team to implement a data-driven monitoring dashboard",
      "Enhanced safety insights, supporting a 25% improvement in operational safety metrics",
      "Presented findings to the Industrial Safety Innovation panel at Hindalco",
    ],
  },
  {
    id: 2,
    role: "Deputy Hostel Representative",
    company: "P P Savani University,Surat",
    period: "2024 – 2025",
    description:
      "Managed hostel operations and facilitated student engagement by bridging communication between administration and 300+ residents.",
    outcomes: [
      "Organized 10+ campus events improving hostel participation by 40%",
      "Established feedback systems to resolve student issues efficiently",
      "Recognized by faculty for coordination and leadership skills",
    ],
  },
  {
    id: 3,
    role: "Independent Product Builder",
    company: "Self-Initiated Project",
    period: "2025",
    description:
      "Led design initiatives for student organizations. Organized workshops, mentored junior designers, and created design systems.",
    outcomes: [
      "Implemented animated UI/UX with Figma prototypes and React components",
      "Showcases a product mindset through self-initiated feature iterations",
    ],
  },
  {
    id: 4,
    role: "Hackathon Participant",
    company: "P P Savani University & SIH",
    period: "2023 – 2025",
    description: "Actively participated in multiple hackathons for three consecutive years, building innovative, data-driven, and user-focused prototypes across diverse problem statements — from AI to IoT to product design.",
    outcomes: [
      "Developed 3 working prototypes focused on user experience and real-world impact",
      "Collaborated in cross-functional teams combining design, dev, and product roles",
      "Shortlisted and recognized in consecutive Smart India Hackathon and inter-college hackathons",
      "Refined rapid ideation, MVP building, and presentation skills through iteration",
    ],
  },
];

export const Experience = memo(function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      id="experience"
      className="py-32 relative"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-sm tracking-widest text-[#5DADE2] uppercase mb-4">
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl text-[#F5F6F7]">
            Where Impact Meets Craft
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-[#141820] border border-[#BDC3C7]/10 rounded-2xl p-8 hover:border-[#5DADE2]/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-[#5DADE2]/10 rounded-lg group-hover:bg-[#5DADE2]/20 transition-colors h-fit">
                      <Briefcase className="w-6 h-6 text-[#5DADE2]" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#F5F6F7] mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-[#BDC3C7]">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#5DADE2] md:text-right">
                    {exp.period}
                  </div>
                </div>

                <p className="text-[#BDC3C7] mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="border-t border-[#BDC3C7]/10 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-[#5DADE2]" />
                    <span className="text-sm text-[#5DADE2]">
                      Key Outcomes
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {exp.outcomes.map((outcome, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-[#5DADE2] rounded-full" />
                        <span className="text-[#BDC3C7]">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});