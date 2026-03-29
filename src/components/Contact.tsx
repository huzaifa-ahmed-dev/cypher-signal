"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "b1c4d269-d3a7-4223-baec-5e03fdaeb45d",
          subject: `New Enquiry from ${formData.name} — Cypher Signal`,
          from_name: 'Cypher Signal Website',
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormState('success');
        setFormData({ name: '', phone: '', service: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#020C1B]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Get In <span className="text-[#00E676]">Touch</span></h2>
          <p className="text-gray-400 text-base md:text-lg">Have a question or ready to secure your premises? Reach out and our team will get back to you immediately.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[#00E676]/10 p-4 rounded-xl text-[#00E676]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Phone</h4>
                <p className="text-gray-400 mb-2">Mon-Sat from 8am to 6pm.</p>
                <a href="tel:+971547172486" className="text-[#00E676] font-medium hover:underline">+971 54 717 2486</a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[#00E676]/10 p-4 rounded-xl text-[#00E676]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="text-gray-400 mb-2">Send us a message anytime.</p>
                <a href="mailto:info@cyphersignal.com" className="text-[#00E676] font-medium hover:underline">info@cyphersignal.com</a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[#00E676]/10 p-4 rounded-xl text-[#00E676]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Office</h4>
                <p className="text-gray-400">Business Bay<br />Dubai, United Arab Emirates</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass-panel p-8 md:p-10 rounded-3xl"
          >
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 gap-4 text-center">
                <CheckCircle className="w-16 h-16 text-[#00E676]" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-400 max-w-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-4 px-6 py-2 border border-[#00E676] text-[#00E676] rounded-lg hover:bg-[#00E676]/10 transition-colors text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors"
                      placeholder="+971 5X XXX XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="CCTV Installation">CCTV Installation</option>
                    <option value="Barrier & Gate Automation">Barrier &amp; Gate Automation</option>
                    <option value="Smart Access Control">Smart Access Control</option>
                    <option value="Maintenance & Repair">Maintenance &amp; Repair</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email us directly at info@cyphersignal.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full bg-[#00E676] text-[#0A192F] font-bold text-base md:text-lg px-6 py-3 md:py-4 rounded-lg hover:bg-[#00c968] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
