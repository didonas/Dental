"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/animations";
import { AnimatePresence, motion } from "framer-motion";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    doctor: "",
    treatment: "",
    date: "",
    time: "",
    notes: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
    if (!formData.treatment) newErrors.treatment = "Please select a treatment.";
    if (!formData.date) newErrors.date = "Please select a preferred date.";
    if (!formData.time) newErrors.time = "Please select a preferred time.";
    if (!formData.consent) newErrors.consent = "You must agree to be contacted.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      doctor: "",
      treatment: "",
      date: "",
      time: "",
      notes: "",
      consent: false,
    });
    setErrors({});
  };

  // Restrict past dates
  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="min-h-screen bg-brand-ivory text-brand-navy pt-24 pb-32">
      
      {/* Appointment Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center border-b border-brand-navy/10 mb-16">
        <div className="w-full lg:w-[45%] flex flex-col items-start z-10">
          <Reveal delay={0.1}>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-muted-gold mb-6 block">
              Book an Appointment
            </span>
            <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.05] font-medium mb-6">
              Your Smile Deserves<br />
              <span className="italic text-brand-navy/70">Expert Care.</span>
            </h1>
            <p className="text-brand-navy/70 text-[18px] leading-[1.6] max-w-sm font-light">
              Schedule your consultation with our dental specialists in just a few simple steps.
            </p>
          </Reveal>
        </div>
        
        <div className="w-full lg:w-[50%] h-[300px] lg:h-[400px] relative rounded-[2px] overflow-hidden">
          <Reveal delay={0.3} className="w-full h-full">
            <Image 
              src="/images/treatment_room_1786365456966.jpg" 
              alt="Morgans Treatment Room"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Form Area */}
        <div className="w-full lg:w-[65%]">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-sm rounded-[2px] flex flex-col gap-10">
              
              {/* Group: Personal Details */}
              <div className="flex flex-col gap-6">
                <h3 className="font-serif text-[24px] font-medium border-b border-brand-navy/10 pb-4">
                  01. Your Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Full Name *</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`border-b ${errors.name ? 'border-red-500' : 'border-brand-navy/20'} py-3 outline-none focus:border-brand-gold transition-colors bg-transparent font-light text-[16px]`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-[12px]">{errors.name}</span>}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Phone Number *</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`border-b ${errors.phone ? 'border-red-500' : 'border-brand-navy/20'} py-3 outline-none focus:border-brand-gold transition-colors bg-transparent font-light text-[16px]`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-red-500 text-[12px]">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-b border-brand-navy/20 py-3 outline-none focus:border-brand-gold transition-colors bg-transparent font-light text-[16px]"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Preferred Doctor</label>
                    <select 
                      value={formData.doctor}
                      onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                      className="border-b border-brand-navy/20 py-3 outline-none focus:border-brand-gold transition-colors bg-transparent font-light text-[16px] appearance-none"
                    >
                      <option value="">Any Available Specialist</option>
                      <option value="dr-sarah">Dr. Sarah Jenkins</option>
                      <option value="dr-michael">Dr. Michael Chen</option>
                      <option value="dr-emily">Dr. Emily Roberts</option>
                      <option value="dr-james">Dr. James Wilson</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Group: Treatment & Schedule */}
              <div className="flex flex-col gap-6">
                <h3 className="font-serif text-[24px] font-medium border-b border-brand-navy/10 pb-4">
                  02. Treatment & Schedule
                </h3>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Treatment / Service *</label>
                  <select 
                    value={formData.treatment}
                    onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                    className={`border-b ${errors.treatment ? 'border-red-500' : 'border-brand-navy/20'} py-3 outline-none focus:border-brand-gold transition-colors bg-transparent font-light text-[16px] appearance-none`}
                  >
                    <option value="" disabled>Select a treatment</option>
                    <option value="general">General Consultation</option>
                    <option value="implants">Dental Implants</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="ortho">Orthodontics</option>
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="maxillofacial">Oral & Maxillofacial Consultation</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.treatment && <span className="text-red-500 text-[12px]">{errors.treatment}</span>}
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Preferred Date *</label>
                  <input 
                    type="date"
                    min={today}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className={`border-b ${errors.date ? 'border-red-500' : 'border-brand-navy/20'} py-3 outline-none focus:border-brand-gold transition-colors bg-transparent font-light text-[16px]`}
                  />
                  {errors.date && <span className="text-red-500 text-[12px]">{errors.date}</span>}
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Preferred Time *</label>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({...formData, time})}
                        className={`px-5 py-3 text-[14px] font-light transition-all rounded-[2px] border ${formData.time === time ? 'bg-brand-gold text-brand-navy border-brand-gold' : 'border-brand-navy/20 hover:border-brand-gold'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.time && <span className="text-red-500 text-[12px]">{errors.time}</span>}
                </div>
              </div>

              {/* Group: Confirm */}
              <div className="flex flex-col gap-6">
                <h3 className="font-serif text-[24px] font-medium border-b border-brand-navy/10 pb-4">
                  03. Confirm
                </h3>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/70">Additional Notes</label>
                  <textarea 
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="border-b border-brand-navy/20 py-3 outline-none focus:border-brand-gold transition-colors bg-transparent font-light text-[16px] resize-none"
                    placeholder="Tell us briefly about your concern..."
                  />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input 
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    className="mt-1 accent-brand-gold"
                  />
                  <div className="flex flex-col">
                    <label htmlFor="consent" className="text-[14px] font-light text-brand-navy/80 cursor-pointer">
                      I agree to be contacted regarding my appointment request.
                    </label>
                    {errors.consent && <span className="text-red-500 text-[12px] mt-1">{errors.consent}</span>}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="mt-6 bg-brand-gold text-brand-navy px-10 py-5 text-[15px] font-semibold transition-all hover:bg-brand-navy hover:text-white rounded-[2px] tracking-wide flex items-center justify-center gap-3 group shadow-sm hover:shadow-lg w-full md:w-max"
                >
                  Request Appointment
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </Reveal>
        </div>

        {/* Right Info Panel */}
        <div className="w-full lg:w-[35%] flex flex-col gap-10">
          <Reveal delay={0.2} className="bg-brand-navy text-white p-10 rounded-[2px]">
            <h4 className="font-serif text-[28px] mb-8">What to Expect</h4>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <span className="text-brand-gold font-medium">01</span>
                <p className="font-light text-white/80 text-[15px]">Choose your preferred treatment.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-brand-gold font-medium">02</span>
                <p className="font-light text-white/80 text-[15px]">Select a convenient date and time.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-brand-gold font-medium">03</span>
                <p className="font-light text-white/80 text-[15px]">Our team will contact you to confirm.</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-[12px] text-white/50 italic">
                Demo appointment interface — availability is not live.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-5 bg-white shadow-sm border border-brand-navy/5 rounded-[2px] cursor-pointer hover:border-brand-gold transition-colors">
              <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wider font-semibold text-brand-navy/50">Call Clinic</p>
                <p className="text-[15px]">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-5 bg-white shadow-sm border border-brand-navy/5 rounded-[2px] cursor-pointer hover:border-brand-gold transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wider font-semibold text-brand-navy/50">WhatsApp</p>
                <p className="text-[15px]">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white shadow-sm border border-brand-navy/5 rounded-[2px] cursor-pointer hover:border-brand-gold transition-colors">
              <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wider font-semibold text-brand-navy/50">Get Directions</p>
                <p className="text-[15px]">123 Luxury Ave, Beverly Hills</p>
              </div>
            </div>
          </Reveal>
        </div>

      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-10 md:p-16 rounded-[2px] shadow-2xl max-w-md w-full flex flex-col items-center text-center relative"
            >
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center text-[#22C55E] mb-8">
                <CheckCircle2 size={32} />
              </div>
              
              <span className="uppercase tracking-[0.2em] text-[10px] font-semibold text-brand-muted-gold mb-4 block">
                Appointment Request Demo
              </span>
              
              <h3 className="font-serif text-[32px] font-medium mb-4 text-brand-navy">
                Thank you, {formData.name.split(' ')[0]}.
              </h3>
              
              <p className="text-brand-navy/70 text-[15px] leading-[1.6] font-light mb-10">
                Your appointment request has been entered successfully for demonstration purposes. 
                <br /><br />
                <span className="font-medium text-brand-navy">No real appointment has been created.</span>
              </p>

              <button 
                onClick={resetForm}
                className="bg-brand-navy text-white px-10 py-4 text-[15px] font-semibold transition-colors hover:bg-brand-gold hover:text-brand-navy rounded-[2px] w-full tracking-wide"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
