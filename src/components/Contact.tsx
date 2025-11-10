import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, memo } from "react";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { emailJsConfig, isEmailJsConfigured } from "../config/emailjs.config";

export const Contact = memo(function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (!isEmailJsConfigured()) {
      toast.error("Email service not configured", {
        description: "Please set up EmailJS credentials in /config/emailjs.config.ts. See /EMAILJS_SETUP.md for instructions.",
        duration: 8000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Import emailjs dynamically
      const emailjs = await import("@emailjs/browser");

      console.log("Sending email with config:", {
        serviceId: emailJsConfig.serviceId,
        templateId: emailJsConfig.templateId,
        publicKey: emailJsConfig.publicKey.substring(0, 5) + "...",
      });

      // Send email
      const response = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        emailJsConfig.publicKey
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
          duration: 5000,
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Email send error:", error);
      
      // More detailed error message
      let errorDescription = "Please try again or contact me directly via email.";
      
      if (error && typeof error === 'object' && 'text' in error) {
        const errorText = (error as any).text;
        if (errorText === "The recipients address is corrupted" || errorText === "The recipients address is empty") {
          errorDescription = "⚠️ Email template not configured. Please set the 'To email' field to garvpandey34@gmail.com in your EmailJS template dashboard. See /EMAILJS_COMPLETE_FIX.md for instructions.";
        }
      }
      
      toast.error("Failed to send message", {
        description: errorDescription,
        duration: 8000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-sm tracking-widest text-[#5DADE2] uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl text-[#F5F6F7] mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-[#BDC3C7] max-w-2xl mx-auto">
            I'm always open to discussing product ideas, design
            opportunities, or partnership possibilities. Drop me
            a message and let's create something meaningful
            together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl text-[#F5F6F7] mb-6">
              Connect With Me
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:garvpandey34@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl hover:border-[#5DADE2]/30 transition-all group"
              >
                <div className="p-3 bg-[#5DADE2]/10 rounded-lg group-hover:bg-[#5DADE2]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#5DADE2]" />
                </div>
                <div>
                  <div className="text-sm text-[#BDC3C7]">
                    Email
                  </div>
                  <div className="text-[#F5F6F7]">
                    garvpandey34@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/garv-pandey03/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl hover:border-[#5DADE2]/30 transition-all group"
              >
                <div className="p-3 bg-[#5DADE2]/10 rounded-lg group-hover:bg-[#5DADE2]/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-[#5DADE2]" />
                </div>
                <div>
                  <div className="text-sm text-[#BDC3C7]">
                    LinkedIn
                  </div>
                  <div className="text-[#F5F6F7]">
                    linkedin.com/in/garv-pandey03
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/GarvPandey34"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl hover:border-[#5DADE2]/30 transition-all group"
              >
                <div className="p-3 bg-[#5DADE2]/10 rounded-lg group-hover:bg-[#5DADE2]/20 transition-colors">
                  <Github className="w-5 h-5 text-[#5DADE2]" />
                </div>
                <div>
                  <div className="text-sm text-[#BDC3C7]">
                    GitHub
                  </div>
                  <div className="text-[#F5F6F7]">
                    github.com/GarvPandey34
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {!isEmailJsConfigured() && (
              <div className="mb-6 p-4 bg-[#5DADE2]/10 border border-[#5DADE2]/30 rounded-xl">
                <p className="text-[#5DADE2] text-sm">
                  ⚠️ Email service not configured yet. See{" "}
                  <code className="bg-[#0C0E12] px-2 py-1 rounded">
                    /EMAILJS_SETUP.md
                  </code>{" "}
                  for setup instructions.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#F5F6F7] mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl text-[#F5F6F7] focus:border-[#5DADE2] focus:outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#F5F6F7] mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl text-[#F5F6F7] focus:border-[#5DADE2] focus:outline-none transition-colors"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#F5F6F7] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-[#141820] border border-[#BDC3C7]/10 rounded-xl text-[#F5F6F7] focus:border-[#5DADE2] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#5DADE2] text-[#0C0E12] rounded-xl transition-all hover:bg-[#4A9FD1] hover:shadow-lg hover:shadow-[#5DADE2]/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-[#BDC3C7]/10 text-center"
        >
          <p className="text-[#BDC3C7]">
            © 2025 Garv Pandey. Designed and built with care.
          </p>
        </motion.div>
      </div>
    </section>
  );
});