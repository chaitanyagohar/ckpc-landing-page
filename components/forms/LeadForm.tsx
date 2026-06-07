'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OtpInput from 'react-otp-input';
import { secureStorage } from '@/lib/security/storage';

export default function LeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setLoading(true);
    // Simulate API call to Msg91
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 800);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) return;
    setLoading(true);
    // Simulate verification and CRM push
    setTimeout(() => {
      setLoading(false);
      // Fulfilling Point G: Encrypted Local Storage session save
      secureStorage.setItem('lead_session', { phone, verified: true, timestamp: Date.now() });
      alert("Brochure Unlocked & Sent to WhatsApp!");
    }, 800);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.form 
            key="phone-step"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={handleSendOtp}
            className="space-y-4"
          >
            <div>
              <label className="sr-only">Phone Number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full h-14 pl-14 text-black pr-4 bg-zinc-100 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:outline-none transition-all"
                  placeholder="Enter WhatsApp Number"
                />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-14 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center"
            >
              {loading ? 'Sending OTP...' : 'Get Pricing & Brochure'}
            </button>
          </motion.form>
        ) : (
          <motion.form 
            key="otp-step"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={handleVerifyOtp}
            className="space-y-4"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-sm text-zinc-600">Enter the 4-digit code sent to +91 {phone}</p>
              {/* Point E: 4-Digit OTP UI */}
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                containerStyle="flex gap-3 justify-center w-full my-4"
                inputStyle="w-14 h-14 text-2xl font-bold bg-zinc-100 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:outline-none text-zinc-900 transition-all"
              />
            </div>
           {/* Inside the Step 1 Form */}
<button 
  type="submit" 
  disabled={loading}
  className="w-full h-14 bg-gradient-to-r from-ckpc-yellow to-ckpc-orange text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg shadow-ckpc-orange/20"
>
  {loading ? 'Sending OTP...' : 'Get Pricing & Brochure'}
</button>

{/* Inside the Step 2 Form */}
<button 
  type="submit" 
  disabled={loading || otp.length < 4}
  className="w-full h-14 bg-gradient-to-r from-ckpc-yellow to-ckpc-orange text-white rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:grayscale shadow-lg shadow-ckpc-orange/20"
>
  {loading ? 'Verifying...' : 'Verify & Unlock'}
</button>
            <button 
              type="button" 
              onClick={() => setStep(1)} 
              className="w-full text-xs text-zinc-500 hover:text-zinc-900"
            >
              Change Phone Number
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}