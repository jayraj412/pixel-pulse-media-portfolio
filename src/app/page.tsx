import Hero from '@/components/Hero';
import MissionVision from '@/components/MissionVision';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
    return (
        <main className="bg-[#050505] min-h-screen selection:bg-[#c026d3]/30 selection:text-white">
            <Hero />
            <MissionVision />
            <Projects />
            <About />
        </main>
    );
}
