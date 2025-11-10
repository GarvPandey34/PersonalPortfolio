import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, memo } from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering (AI&ML)",
    institution: "P P Savani University, Surat",
    year: "2022 - 2026",
    description:
      "Pursuing a Bachelor of Technology focused on Artificial Intelligence and Machine Learning. Building expertise in product design, data-driven systems, and full-stack development while applying product thinking across academic and real-world projects.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    field: "Science",
    institution: "The Aditya Birla Public School,Kesrol",
    year: "2020 - 2020",
    description:
      "Completed Higher Secondary education with Science stream, building strong fundamentals in Computer Science, Physics, Chemistry, Mathematics and Language. Actively engaged in analytical problem-solving and conceptual learning during this academic phase.",
  },
  {
    id: 3,
    degree: "Professional Certifications",
    field:
      "Product Management · Artificial Intelligence · Cloud · Web Development",
    institution: "Online Certifications",
    year: "2021 - Present",
    description:
      "Earned multiple certifications in Product Management, Cloud Computing, AI, and Web Development — reflecting continuous learning and cross-disciplinary growth in tech and design.",
  },
];

export const Education = memo(function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      id="education"
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
            Education
          </div>
          <h2 className="text-4xl md:text-5xl text-[#F5F6F7]">
            Learning Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-8 min-w-max">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="w-[400px] bg-[#141820] border border-[#BDC3C7]/10 rounded-2xl p-8 hover:border-[#5DADE2]/30 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[#5DADE2]/10 rounded-lg group-hover:bg-[#5DADE2]/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-[#5DADE2]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#5DADE2] mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl text-[#F5F6F7] mb-1">
                        {item.degree}
                      </h3>
                      <div className="text-[#BDC3C7]">
                        {item.field}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[#BDC3C7]">
                      {item.institution}
                    </div>
                    <p className="text-[#BDC3C7]/80 leading-relaxed">
                      {item.description}
                    </p>
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
            ← Scroll to explore →
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