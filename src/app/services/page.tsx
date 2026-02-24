"use client";
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AnimatedSection from '../components/AnimatedSection';

export default function Services() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0a0a23] via-[#0a0a2a] to-[#1a1a40] font-sans text-white relative overflow-hidden flex flex-col items-center justify-center">
      <main className="flex flex-col items-center w-full max-w-7xl mx-auto py-16 px-4 z-10 justify-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 mt-8 text-[#4DB5FF]">What I Offer</h2>
          <p className="text-sm sm:text-base text-center mb-8 text-[#e0e0e0] font-semibold">With a diverse skill set at my disposal, I effortlessly provide a comprehensive range of services, including:</p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 w-full">
            {/* Top row: 3 cards */}
            <div className="glass-card flex flex-col text-left min-h-[340px] p-8">
              <div className="icon-glass mb-4"><DesignServicesOutlinedIcon sx={{ fontSize: 36, color: '#4DB5FF' }} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#4DB5FF]">Distributed Systems & Job Orchestration</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm text-[#e0e0e0cc]">
                <li>Deterministic retry, backoff, and failure recovery strategies.</li>
                <li>Distributed job orchestration and worker coordination.</li>
                <li>Control-plane design for managing system state and lifecycle.</li>
                <li>Build systems that coordinate work reliably across processes, machines, and time.</li>
                <li>Idempotent task execution and state reconciliation.</li>
                <li>Visibility into system behavior through structured logging and metrics.</li>
              </ul>
            </div>
            <div className="glass-card flex flex-col text-left min-h-[340px] p-8">
              <div className="icon-glass mb-4"><DesignServicesOutlinedIcon sx={{ fontSize: 36, color: '#4DB5FF' }} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#4DB5FF]">Backend Engineering</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm text-[#e0e0e0cc]">
                <li>Build transactional systems with strong data integrity guarantees.</li>
                <li>Optimize database schemas, queries, and indexes for PostgreSQL.</li>
                <li>Design and build robust backend services that prioritize correctness, performance, and long-term maintainability.</li>
                <li>Design and implement REST and event-driven APIs.</li>
                <li>Implement authentication, authorization, and access control.</li>
                <li>Handle concurrency, idempotency, and failure scenarios explicitly.</li>
              </ul>
            </div>
            <div className="glass-card flex flex-col text-left min-h-[340px] p-8">
              <div className="icon-glass mb-4"><DesignServicesOutlinedIcon sx={{ fontSize: 36, color: '#4DB5FF' }} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#4DB5FF]">Platform & Infrastructure Engineering</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm text-[#e0e0e0cc]">
                <li>Design internal tooling and service platforms.</li>
                <li>Infrastructure-aware system design (cloud-native, containerized workloads).</li>
                <li>Create internal platforms that make systems operable, observable, and scalable.</li>
                <li>Database-backed coordination and scheduling systems.</li>
                <li>Reliability-focused architecture for long-running services.</li>
                <li>Automation of operational workflows.</li>
              </ul>
            </div>
            {/* Bottom row: 2 cards, centered */}
            <div className="glass-card flex flex-col text-left min-h-[340px] p-8 col-span-1 sm:col-span-2 lg:col-start-2 lg:col-span-1 mx-auto">
              <div className="icon-glass mb-4"><DesignServicesOutlinedIcon sx={{ fontSize: 36, color: '#4DB5FF' }} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#4DB5FF]">System Reliability & Performance</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm text-[#e0e0e0cc]">
                <li>Ensure systems behave correctly under load, partial failure, and edge cases.</li>
                <li>Performance profiling and bottleneck analysis.</li>
                <li>Load-aware system design.</li>
                <li>Graceful degradation and fault isolation.</li>
                <li>Safe rollout strategies and backward-compatible changes.</li>
                <li>Production debugging and incident-driven improvements.</li>
              </ul>
            </div>
            <div className="glass-card flex flex-col text-left min-h-[340px] p-8 col-span-1 sm:col-span-2 lg:col-start-3 lg:col-span-1 mx-auto">
              <div className="icon-glass mb-4"><DesignServicesOutlinedIcon sx={{ fontSize: 36, color: '#4DB5FF' }} /></div>
              <h3 className="text-xl font-bold mb-4 text-[#4DB5FF]">Technical Leadership & System Ownership</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm text-[#e0e0e0cc]">
                <li>Own systems end-to-end, from design to production.</li>
                <li>Architecture design and technical decision-making.</li>
                <li>Mentoring engineers on system design and backend fundamentals.</li>
                <li>Code review with focus on correctness and long-term impact.</li>
                <li>Translating product requirements into resilient system designs.</li>
                <li>Driving systems from prototype to stable production operation.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
        {/* Contact Form */}
        <div className="w-full max-w-3xl mx-auto glass-card rounded-2xl p-8 shadow-lg mb-16">
          <h4 className="text-center text-lg font-semibold mb-6">Contact me if you need any of these services</h4>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name" className="flex-1 rounded-md bg-[#23243a] border border-[#4DB5FF33] px-4 py-2 text-white" />
              <input type="email" placeholder="Your Email" className="flex-1 rounded-md bg-[#23243a] border border-[#4DB5FF33] px-4 py-2 text-white" />
            </div>
            <input type="text" placeholder="Subject" className="w-full rounded-md bg-[#23243a] border border-[#4DB5FF33] px-4 py-2 text-white" />
            <textarea placeholder="Your Message" className="w-full rounded-md bg-[#23243a] border border-[#4DB5FF33] px-4 py-2 text-white min-h-30" />
            <button type="submit" className="w-full rounded-full bg-[#4DB5FF] text-black font-semibold py-3 mt-2 hover:bg-[#3399cc] transition">Send Message</button>
          </form>
        </div>
      </main>
    </div>
  );
}
