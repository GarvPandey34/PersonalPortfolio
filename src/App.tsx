import { lazy, Suspense } from "react";
import { CursorGlow } from "./components/CursorGlow";
import { Hero } from "./components/Hero";
import { Toaster } from "sonner@2.0.3";

// Lazy load sections that are below the fold for better initial load performance
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Education = lazy(() => import("./components/Education").then(m => ({ default: m.Education })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Certificates = lazy(() => import("./components/Certificates").then(m => ({ default: m.Certificates })));
const Skills = lazy(() => import("./components/Skills").then(m => ({ default: m.Skills })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));

// Skeleton loader for sections
function SectionSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#5DADE2]/20 border-t-[#5DADE2] rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0C0E12] via-[#141820] to-[#1A1E26] relative overflow-x-hidden">
      <CursorGlow />
      <Toaster 
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#141820',
            border: '1px solid rgba(93, 173, 226, 0.1)',
            color: '#F5F6F7',
          },
        }}
      />

      <div className="relative z-10">
        {/* Hero loads immediately - it's above the fold */}
        <Hero />
        
        {/* All other sections lazy load with suspense boundaries */}
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Certificates />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}