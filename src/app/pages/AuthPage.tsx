import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff, ArrowLeft, Sparkles, Check, Github, Mail } from 'lucide-react';
import { Logo } from '../components/Logo';

const features = [
  'AI-powered writing assistant',
  'Real-time collaboration tools',
  'Multi-format export (PDF, DOCX, MD)',
  'Visual & chart generation',
  'Secure author-controlled workflow',
];

export default function AuthPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '', remember: false });
  const [regForm, setRegForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '', agree: false });

  const inputStyle = {
    background: '#112040',
    border: '1px solid rgba(100,150,255,0.2)',
    color: '#E8F0FE',
    borderRadius: '10px',
    padding: '12px 14px',
    width: '100%',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.2s',
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app');
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ background: '#060D1A', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Left panel - brand */}
      <div
        className="hidden lg:flex flex-col justify-between w-2/5 p-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0C1A38 0%, #0D2150 100%)', borderRight: '1px solid rgba(100,150,255,0.1)' }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(21,101,192,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute bottom-20 right-0 w-48 h-48 rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(0,188,212,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        </div>

        <div className="relative">
          <Logo size="md" />
        </div>

        <div className="relative">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(0,188,212,0.1)', border: '1px solid rgba(0,188,212,0.2)' }}
          >
            <Sparkles size={13} style={{ color: '#00BCD4' }} />
            <span className="text-xs font-medium" style={{ color: '#00BCD4' }}>AI-Powered Platform</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Create & collaborate<br />like never before
          </h2>

          <p className="text-sm leading-relaxed mb-8" style={{ color: '#8AA3C8' }}>
            Join thousands of writers, researchers and teams who use NEURAL+ to produce AI-enhanced content faster and smarter.
          </p>

          <ul className="space-y-3">
            {features.map(f => (
              <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#C8D8F0' }}>
                <span
                  className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                  style={{ background: 'rgba(0,188,212,0.15)', border: '1px solid rgba(0,188,212,0.3)' }}
                >
                  <Check size={11} style={{ color: '#00BCD4' }} />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="p-5 rounded-2xl"
            style={{ background: 'rgba(100,150,255,0.06)', border: '1px solid rgba(100,150,255,0.12)' }}
          >
            <p className="text-sm italic mb-3" style={{ color: '#C8D8F0' }}>
              "NEURAL+ transformed how our team creates content. The AI assistance is incredibly accurate."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face"
                alt="User"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-white">Sarah Chen</div>
                <div className="text-xs" style={{ color: '#8AA3C8' }}>Senior Technical Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - forms */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Back to landing */}
        <div className="absolute top-6 left-6 lg:left-auto lg:right-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm transition-colors"
            style={{ color: '#8AA3C8' }}
          >
            <ArrowLeft size={14} />
            Back to home
          </button>
        </div>

        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex justify-center mb-8 lg:hidden">
            <Logo size="md" />
          </div>

          {/* Tabs */}
          <div
            className="flex p-1 rounded-xl mb-8"
            style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.12)' }}
          >
            {(['login', 'register'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: activeTab === tab ? '#1565C0' : 'transparent',
                  color: activeTab === tab ? 'white' : '#8AA3C8',
                  boxShadow: activeTab === tab ? '0 4px 12px rgba(21,101,192,0.3)' : 'none',
                }}
              >
                {tab === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          {activeTab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Sign in to your NEURAL+ account</p>
              </div>

              {/* Social login */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Github, label: 'GitHub' },
                  { icon: Mail, label: 'Google' },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all"
                    style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.15)', color: '#C8D8F0' }}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ background: 'rgba(100,150,255,0.12)' }} />
                <span className="text-xs" style={{ color: '#4A6080' }}>or continue with email</span>
                <div className="flex-1 h-px" style={{ background: 'rgba(100,150,255,0.12)' }} />
              </div>

              <div>
                <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Email address</label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={e => setLoginForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="you@example.com"
                  style={inputStyle}
                  required
                />
              </div>

              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs font-medium" style={{ color: '#8AA3C8' }}>Password</label>
                  <a href="#" className="text-xs" style={{ color: '#1565C0' }}>Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={e => setLoginForm(p => ({ ...p, password: e.target.value }))}
                    placeholder="••••••••"
                    style={{ ...inputStyle, paddingRight: '44px' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: '#8AA3C8' }}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={loginForm.remember}
                  onChange={e => setLoginForm(p => ({ ...p, remember: e.target.checked }))}
                  className="rounded"
                  style={{ accentColor: '#1565C0' }}
                />
                <label htmlFor="remember" className="text-sm" style={{ color: '#8AA3C8' }}>
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #1565C0 0%, #0288D1 100%)',
                  boxShadow: '0 8px 24px rgba(21,101,192,0.35)',
                }}
              >
                Sign In to NEURAL+
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Join NEURAL+ and start creating smarter</p>
              </div>

              <div>
                <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Full Name</label>
                <input
                  type="text"
                  value={regForm.fullName}
                  onChange={e => setRegForm(p => ({ ...p, fullName: e.target.value }))}
                  placeholder="Mohamed Nour Zidani"
                  style={inputStyle}
                  required
                />
              </div>

              <div>
                <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Email address</label>
                <input
                  type="email"
                  value={regForm.email}
                  onChange={e => setRegForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="you@example.com"
                  style={inputStyle}
                  required
                />
              </div>

              <div>
                <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Password</label>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={regForm.password}
                    onChange={e => setRegForm(p => ({ ...p, password: e.target.value }))}
                    placeholder="Min. 8 characters"
                    style={{ ...inputStyle, paddingRight: '44px' }}
                    required
                    minLength={8}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#8AA3C8' }}>
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {/* Password strength */}
                {regForm.password && (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-1 flex-1 rounded-full transition-all"
                          style={{ background: i < (regForm.password.length > 10 ? 4 : regForm.password.length > 7 ? 3 : regForm.password.length > 4 ? 2 : 1) ? (regForm.password.length > 10 ? '#4CAF50' : regForm.password.length > 7 ? '#FF9800' : '#F44336') : 'rgba(100,150,255,0.15)' }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfPass ? 'text' : 'password'}
                    value={regForm.confirmPassword}
                    onChange={e => setRegForm(p => ({ ...p, confirmPassword: e.target.value }))}
                    placeholder="Repeat your password"
                    style={{ ...inputStyle, paddingRight: '44px' }}
                    required
                  />
                  <button type="button" onClick={() => setShowConfPass(!showConfPass)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#8AA3C8' }}>
                    {showConfPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={regForm.agree}
                  onChange={e => setRegForm(p => ({ ...p, agree: e.target.checked }))}
                  className="mt-0.5"
                  style={{ accentColor: '#1565C0' }}
                  required
                />
                <label htmlFor="agree" className="text-xs" style={{ color: '#8AA3C8' }}>
                  I agree to the <a href="#" style={{ color: '#1565C0' }}>Terms of Service</a> and <a href="#" style={{ color: '#1565C0' }}>Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #1565C0 0%, #0288D1 100%)',
                  boxShadow: '0 8px 24px rgba(21,101,192,0.35)',
                }}
              >
                Create My Account
              </button>
            </form>
          )}

          <p className="text-center text-sm mt-6" style={{ color: '#8AA3C8' }}>
            {activeTab === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
              style={{ color: '#1565C0' }}
              className="font-medium"
            >
              {activeTab === 'login' ? 'Create one for free' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
