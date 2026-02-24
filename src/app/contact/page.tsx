"use client";

import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import React, { useState } from 'react';
import SuccessModal from '../components/SuccessModal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
        setShowSuccessModal(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to send message.');
      }
    } catch {
      setError('Failed to send message.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#0a0a2a] to-[#1a1a40] font-sans text-white flex flex-col items-center justify-center">
      <AnimatedSection className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center py-12 px-4 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 mt-8 text-[#4DB5FF]">Contact Me</h2>
        <p className="text-sm sm:text-base text-center mb-8 text-[#e0e0e0] font-semibold">Have a question, proposal, or just want to say hi? Fill out the form below and I&apos;ll get back to you soon!</p>
        <form className="w-full bg-[#181824] rounded-2xl shadow-lg p-8 flex flex-col gap-6 mb-8" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" className="bg-transparent border border-[#2d3a5a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4DB5FF]" required value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" className="bg-transparent border border-[#2d3a5a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4DB5FF]" required value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" className="bg-transparent border border-[#2d3a5a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4DB5FF] resize-none" rows={5} required value={form.message} onChange={handleChange}></textarea>
          <button type="submit" className="bg-[#23243a] rounded-xl shadow-lg p-4 font-semibold text-[#4DB5FF] hover:bg-[#4DB5FF] hover:text-[#23243a] transition w-full" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          {error && <div className="text-red-400 text-center text-sm mt-2">{error}</div>}
        </form>
        <SuccessModal open={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
        <div className="mt-8 text-center text-base text-white">Or send a direct message via my socials</div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 w-full">
          <div className="bg-[#181824] border border-[#2d3a5a] rounded-xl shadow-lg flex flex-col items-center p-6 flex-1 min-w-[220px]">
            <div className="mb-2">
              <Image src="/icons/mail.svg" alt="Mail" width={32} height={32} />
            </div>
            <div className="font-semibold text-lg">Mail</div>
            <div className="text-sm text-[#4DB5FF]">oluwagbengadaniel8580@gmail.com</div>
          </div>
          <div className="bg-[#181824] border border-[#2d3a5a] rounded-xl shadow-lg flex flex-col items-center p-6 flex-1 min-w-[220px]">
            <div className="mb-2">
              <Image src="/icons/twitter.svg" alt="Twitter" width={32} height={32} />
            </div>
            <div className="font-semibold text-lg">Twitter</div>
            <div className="text-sm text-[#4DB5FF]">AethericSyntax</div>
          </div>
          <div className="bg-[#181824] border border-[#2d3a5a] rounded-xl shadow-lg flex flex-col items-center p-6 flex-1 min-w-[220px]">
            <div className="mb-2">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </div>
            <div className="font-semibold text-lg">LinkedIn</div>
            <div className="text-sm text-[#4DB5FF]">aethericsyntax</div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
