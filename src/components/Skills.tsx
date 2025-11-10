import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, memo } from 'react';

const skillCategories = [
  {
    title: 'Product Strategy',
    skills: ['User Research', 'Product Roadmapping', 'A/B Testing', 'Market Analysis', 'Metrics & Analytics'],
  },
  {
    title: 'Design',
    skills: ['UI/UX Design', 'Figma', 'Design Systems', 'Prototyping', 'User Flows', 'Wireframing'],
  },
  {
    title: 'Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'API'],
  },
  {
    title: 'Collaboration',
    skills: [ 'Stakeholder Management', 'Technical Writing', 'Presentation', 'Cross-functional Teams', 'Mentoring'],
  },
];

export const Skills = memo(function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-sm tracking-widest text-[#5DADE2] uppercase mb-4">Capabilities</div>
          <h2 className="text-4xl md:text-5xl text-[#F5F6F7] mb-6">Skills & Tools</h2>
          <p className="text-[#BDC3C7] max-w-2xl">
            A versatile skill set that bridges product thinking, design craft, and technical execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-[#141820] border border-[#BDC3C7]/10 rounded-2xl p-8"
            >
              <h3 className="text-xl text-[#F5F6F7] mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-[#5DADE2]/10 text-[#5DADE2] rounded-lg text-sm border border-[#5DADE2]/20 hover:bg-[#5DADE2]/20 hover:border-[#5DADE2]/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
