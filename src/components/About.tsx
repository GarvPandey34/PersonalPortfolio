import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, memo } from "react";

export const About = memo(function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="pt-16 pb-32 relative"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <div className="text-sm tracking-widest text-[#5DADE2] uppercase">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl text-[#F5F6F7]">
              Building products that matter
            </h2>
            <div className="space-y-4 text-[#BDC3C7] leading-relaxed">
              <p>
                I'm a product thinker, design creator, and
                front-end builder rolled into one. My journey
                began with curiosity about how digital products
                shape human behavior, and evolved into a passion
                for creating experiences that are both beautiful
                and functional.
              </p>
              <p>
                I believe great products sit at the intersection
                of user needs, business goals, and technical
                possibility. My approach combines strategic
                product thinking with hands-on design and
                development—allowing me to move fluidly from
                concept to code.
              </p>
              <p>
                Currently, I'm focused on building my skills in
                product management while continuing to create
                compelling user interfaces that solve real
                problems. Every project is an opportunity to
                learn, iterate, and craft something meaningful.
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-[#BDC3C7]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5DADE2]/20 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjI0MzE3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-3xl text-[#5DADE2]">3+</div>
              <div className="text-sm text-[#BDC3C7]">
                Years Learning
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-3xl text-[#5DADE2]">8</div>
              <div className="text-sm text-[#BDC3C7]">
                Projects Built
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});