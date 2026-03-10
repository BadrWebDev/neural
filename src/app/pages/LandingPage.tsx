import { useNavigate } from 'react-router';
import {
  Sparkles, FileText, Users, Globe, ArrowRight, Check,
  Zap, Shield, BarChart3, MessageSquare, Download, Star,
  ChevronRight, Play
} from 'lucide-react';
import { Logo } from '../components/Logo';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Writing',
    desc: 'Rewrite, summarize, clarify, and improve your text with advanced AI assistance inspired by the best language models.',
    color: '#00BCD4',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    desc: 'Invite collaborators, accept or reject suggested changes, and maintain full control over your intellectual property.',
    color: '#1565C0',
  },
  {
    icon: BarChart3,
    title: 'Visual Generation',
    desc: 'Generate graphs, charts, and illustrations from your content automatically using AI-driven visual creation.',
    color: '#4CAF50',
  },
  {
    icon: Globe,
    title: 'Flexible Publishing',
    desc: 'Publish articles publicly or keep them private. Control visibility at any stage of the writing process.',
    color: '#FF9800',
  },
  {
    icon: Download,
    title: 'Multi-format Export',
    desc: 'Export your articles to PDF, DOCX, Markdown, or HTML — ready for any platform or workflow.',
    color: '#E91E63',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'End-to-end security with JWT authentication, Row-Level Security, and full OWASP compliance.',
    color: '#9C27B0',
  },
];

const stats = [
  { value: '50K+', label: 'Active Writers' },
  { value: '2M+', label: 'Articles Created' },
  { value: '98%', label: 'AI Accuracy' },
  { value: '<3s', label: 'AI Response Time' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Technical Writer',
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=48&h=48&fit=crop&crop=face',
    text: 'NEURAL+ completely transformed how I create documentation. The AI suggestions are incredibly accurate and save me hours every week.',
    stars: 5,
  },
  {
    name: 'Marcus Okonkwo',
    role: 'Content Strategist',
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=48&h=48&fit=crop&crop=face',
    text: 'The collaboration system is brilliant. My team can suggest edits and I approve them — it\'s like Git for writing. Absolutely essential.',
    stars: 5,
  },
  {
    name: 'Lena Müller',
    role: 'Research Lead at TechLab',
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=48&h=48&fit=crop&crop=face',
    text: 'AI visual generation is a game-changer. I describe what I need and get professional charts instantly. Our reports look amazing now.',
    stars: 5,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    desc: 'Perfect for individuals exploring AI writing',
    features: ['5 articles/month', '10 AI requests/month', 'PDF export', 'Public publishing'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    desc: 'For serious content creators and writers',
    features: ['Unlimited articles', '500 AI requests/month', 'All export formats', 'Team collaboration', 'AI visual generation', 'Priority support'],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$79',
    period: '/month',
    desc: 'For teams and organizations at scale',
    features: ['Everything in Pro', 'Unlimited AI requests', 'Custom AI training', 'SSO & SAML', 'Dedicated support', 'SLA guarantee'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen"
      style={{ background: '#060D1A', fontFamily: 'Inter, sans-serif', color: '#E8F0FE' }}
    >
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{
          background: 'rgba(6,13,26,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(100,150,255,0.1)',
        }}
      >
        <Logo size="sm" />

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: '#8AA3C8' }}>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/auth')}
            className="px-4 py-2 text-sm rounded-lg transition-colors"
            style={{ color: '#8AA3C8' }}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/auth')}
            className="px-5 py-2 text-sm rounded-xl font-medium text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #1565C0, #0288D1)', boxShadow: '0 4px 16px rgba(21,101,192,0.35)' }}
          >
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6 md:px-16">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, #1565C0 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full opacity-8"
            style={{ background: 'radial-gradient(ellipse, #00BCD4 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-6"
            style={{ background: 'radial-gradient(ellipse, #1565C0 0%, transparent 70%)', filter: 'blur(60px)' }} />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(rgba(100,150,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100,150,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(21,101,192,0.15)', border: '1px solid rgba(21,101,192,0.3)' }}>
            <Sparkles size={14} style={{ color: '#00BCD4' }} />
            <span className="text-sm font-medium" style={{ color: '#00BCD4' }}>
              AI-Powered Content Creation Platform
            </span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo className="w-28 h-28" />
          </div>

          {/* Headline */}
          <h1
            className="mb-6 max-w-4xl mx-auto"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #90CAF9 50%, #00BCD4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Create, Collaborate &<br />Publish with AI Precision
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: '#8AA3C8' }}
          >
            NEURAL+ is the AI-assisted collaborative content platform where great ideas are born, refined, and shared. Import documents, enhance with AI, collaborate securely, and publish to the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/auth')}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #1565C0 0%, #0288D1 100%)',
                boxShadow: '0 8px 32px rgba(21,101,192,0.4)',
              }}
            >
              Start Creating for Free
              <ArrowRight size={18} />
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#E8F0FE',
              }}
            >
              <Play size={16} style={{ color: '#00BCD4' }} />
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm" style={{ color: '#8AA3C8' }}>
            {['No credit card required', 'Free plan available', 'Cancel anytime'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <Check size={14} style={{ color: '#00BCD4' }} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative max-w-6xl mx-auto mt-16">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(100,150,255,0.2)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(100,150,255,0.1)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?w=1200&fit=crop"
              alt="NEURAL+ Platform Preview"
              className="w-full object-cover"
              style={{ height: 420, objectPosition: 'top' }}
            />
            {/* Overlay with UI mockup feel */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, transparent 50%, #060D1A 100%)' }}
            />
            {/* Floating cards */}
            <div
              className="absolute top-6 left-6 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(12,22,41,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(100,150,255,0.2)' }}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} style={{ color: '#00BCD4' }} />
                <span className="text-sm text-white font-medium">AI is rewriting your paragraph...</span>
              </div>
            </div>
            <div
              className="absolute top-6 right-6 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(12,22,41,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(100,150,255,0.2)' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full" style={{ background: i === 1 ? '#4CAF50' : i === 2 ? '#FF9800' : '#F44336' }} />)}
                </div>
                <span className="text-sm" style={{ color: '#8AA3C8' }}>3 collaborators online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-16" style={{ borderTop: '1px solid rgba(100,150,255,0.08)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="mb-1"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #1976D2, #00BCD4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                }}
              >
                {value}
              </div>
              <div className="text-sm" style={{ color: '#8AA3C8' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(0,188,212,0.1)', border: '1px solid rgba(0,188,212,0.2)' }}>
              <Zap size={14} style={{ color: '#00BCD4' }} />
              <span className="text-sm font-medium" style={{ color: '#00BCD4' }}>Core Features</span>
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">Everything you need to create</h2>
            <p className="max-w-xl mx-auto" style={{ color: '#8AA3C8' }}>
              From AI-assisted writing to collaborative review workflows — NEURAL+ gives you the complete toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="p-6 rounded-2xl group hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: '#0C1629',
                  border: '1px solid rgba(100,150,255,0.1)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8AA3C8' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 md:px-16" style={{ background: '#0C1629' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How NEURAL+ Works</h2>
            <p style={{ color: '#8AA3C8' }}>Three simple steps to publishing AI-enhanced content</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create or Import', desc: 'Start fresh or import your existing documents — PDF, Word, Markdown, or HTML. NEURAL+ processes them intelligently.', icon: FileText },
              { step: '02', title: 'Enhance with AI', desc: 'Let AI rewrite, summarize, clarify, and generate visuals for your content. Fine-tune until perfect.', icon: Sparkles },
              { step: '03', title: 'Collaborate & Publish', desc: 'Invite collaborators, review suggestions, approve changes, and publish to your audience.', icon: Globe },
            ].map(({ step, title, desc, icon: Icon }, i) => (
              <div key={step} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 z-10">
                    <ChevronRight size={24} style={{ color: '#1565C0' }} />
                  </div>
                )}
                <div
                  className="p-8 rounded-2xl text-center"
                  style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.12)' }}
                >
                  <div className="text-5xl font-black mb-4" style={{ color: 'rgba(21,101,192,0.3)', lineHeight: 1 }}>{step}</div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                    style={{ background: 'rgba(21,101,192,0.15)', border: '1px solid rgba(21,101,192,0.3)' }}
                  >
                    <Icon size={24} style={{ color: '#00BCD4' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8AA3C8' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by creators worldwide</h2>
            <p style={{ color: '#8AA3C8' }}>Join thousands of writers who've transformed their workflow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, text, stars }) => (
              <div
                key={name}
                className="p-6 rounded-2xl"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={14} style={{ color: '#FF9800', fill: '#FF9800' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#C8D8F0' }}>"{text}"</p>
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-white">{name}</div>
                    <div className="text-xs" style={{ color: '#8AA3C8' }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 md:px-16" style={{ background: '#0C1629' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
            <p style={{ color: '#8AA3C8' }}>Start free. Scale as you grow. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map(({ name, price, period, desc, features, cta, highlight }) => (
              <div
                key={name}
                className="p-8 rounded-2xl relative"
                style={{
                  background: highlight ? 'linear-gradient(135deg, #0D2150 0%, #112040 100%)' : '#112040',
                  border: highlight ? '2px solid rgba(21,101,192,0.5)' : '1px solid rgba(100,150,255,0.12)',
                  boxShadow: highlight ? '0 0 40px rgba(21,101,192,0.2)' : 'none',
                }}
              >
                {highlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #1565C0, #00BCD4)' }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-sm font-medium mb-1" style={{ color: '#8AA3C8' }}>{name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{price}</span>
                    <span className="text-sm" style={{ color: '#8AA3C8' }}>{period}</span>
                  </div>
                  <p className="text-sm mt-2" style={{ color: '#8AA3C8' }}>{desc}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: '#C8D8F0' }}>
                      <Check size={14} style={{ color: '#00BCD4', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/auth')}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{
                    background: highlight ? 'linear-gradient(135deg, #1565C0, #0288D1)' : 'rgba(100,150,255,0.1)',
                    color: highlight ? 'white' : '#8AA3C8',
                    border: highlight ? 'none' : '1px solid rgba(100,150,255,0.2)',
                  }}
                >
                  {cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="p-12 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #0D1E45 0%, #0C2A5A 100%)',
              border: '1px solid rgba(21,101,192,0.3)',
              boxShadow: '0 0 60px rgba(21,101,192,0.15)',
            }}
          >
            <Sparkles size={40} style={{ color: '#00BCD4', margin: '0 auto 1rem' }} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to create smarter?
            </h2>
            <p className="mb-8" style={{ color: '#8AA3C8' }}>
              Join 50,000+ writers using NEURAL+ to create better content, faster.
            </p>
            <button
              onClick={() => navigate('/auth')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #1565C0, #00BCD4)',
                boxShadow: '0 8px 32px rgba(21,101,192,0.4)',
              }}
            >
              Get Started — It's Free
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 md:px-16"
        style={{ borderTop: '1px solid rgba(100,150,255,0.1)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo size="sm" />
            <div className="flex flex-wrap gap-6 text-sm" style={{ color: '#8AA3C8' }}>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-sm" style={{ color: '#4A6080' }}>
              © 2026 NEURAL+. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
