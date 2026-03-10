import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  User, Lock, Bell, Eye, Download, Trash2, ChevronRight,
  Camera, Save, Globe, Shield, Sparkles, Palette, LogOut,
  AlertTriangle, Check, Moon, Sun, Monitor, Key, Mail,
  Smartphone
} from 'lucide-react';

const TABS = [
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'security', label: 'Security', icon: Lock },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'privacy', label: 'Privacy', icon: Eye },
  { key: 'ai', label: 'AI Preferences', icon: Sparkles },
  { key: 'appearance', label: 'Appearance', icon: Palette },
  { key: 'export', label: 'Export & Data', icon: Download },
  { key: 'danger', label: 'Danger Zone', icon: Trash2 },
] as const;

type Tab = typeof TABS[number]['key'];

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="relative w-11 h-6 rounded-full transition-all shrink-0"
      style={{ background: checked ? '#1565C0' : 'rgba(100,150,255,0.2)' }}
    >
      <span
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all"
        style={{ left: checked ? '1.375rem' : '0.125rem', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}
      />
    </button>
  );
}

function SettingRow({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4" style={{ borderBottom: '1px solid rgba(100,150,255,0.08)' }}>
      <div className="flex-1">
        <p className="text-sm font-medium text-white">{label}</p>
        {desc && <p className="text-xs mt-0.5" style={{ color: '#8AA3C8' }}>{desc}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

export default function SettingsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [saved, setSaved] = useState(false);

  // Profile state
  const [profileForm, setProfileForm] = useState({
    fullName: 'Mohamed Nour Zidani',
    username: 'm.zidani',
    email: 'mnzidani@neural.plus',
    bio: 'Software engineer & AI researcher. Building the future of collaborative content creation.',
    location: 'Algiers, Algeria',
    website: 'mnzidani.dev',
    twitter: '@m_zidani',
    github: 'mnzidani',
  });

  // Security state
  const [twoFactor, setTwoFactor] = useState(true);
  const [sessions, setSessions] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);

  // Notification state
  const [notifs, setNotifs] = useState({
    likesEmail: true,
    likesInApp: true,
    commentsEmail: true,
    commentsInApp: true,
    suggestionsEmail: true,
    suggestionsInApp: true,
    followsEmail: false,
    followsInApp: true,
    aiEmail: false,
    aiInApp: true,
    weeklyDigest: true,
  });

  // Privacy state
  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showEmail: false,
    showFollowers: true,
    allowSuggestions: true,
    indexBySearch: true,
    defaultPublic: false,
  });

  // AI state
  const [aiPrefs, setAiPrefs] = useState({
    autoSuggest: true,
    improveOnSave: false,
    generateVisuals: true,
    toneAnalysis: true,
    plagiarismCheck: true,
    defaultTone: 'Professional',
    language: 'English',
    model: 'Gemini Pro',
  });

  // Appearance
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('dark');
  const [colorAccent, setColorAccent] = useState('#1565C0');
  const [fontSize, setFontSize] = useState('16');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputStyle = {
    background: '#112040',
    border: '1px solid rgba(100,150,255,0.2)',
    color: '#E8F0FE',
    borderRadius: '10px',
    padding: '10px 14px',
    width: '100%',
    outline: 'none',
    fontSize: '14px',
  };

  return (
    <div className="flex h-full" style={{ color: '#E8F0FE' }}>
      {/* Left sidebar */}
      <div
        className="w-64 flex flex-col shrink-0 overflow-y-auto p-4"
        style={{ background: '#0C1629', borderRight: '1px solid rgba(100,150,255,0.1)' }}
      >
        <div className="mb-6 px-2">
          <h1 className="text-base font-semibold text-white">Settings</h1>
          <p className="text-xs mt-0.5" style={{ color: '#8AA3C8' }}>Manage your account</p>
        </div>

        <nav className="space-y-1">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all"
              style={{
                background: activeTab === key ? 'rgba(21,101,192,0.2)' : 'transparent',
                color: activeTab === key ? '#60A5FA' : key === 'danger' ? '#F44336' : '#8AA3C8',
                borderLeft: activeTab === key ? '2px solid #1565C0' : '2px solid transparent',
              }}
            >
              <Icon size={16} />
              {label}
              {activeTab === key && <ChevronRight size={13} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ color: '#F44336' }}
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl">

          {/* Profile tab */}
          {activeTab === 'profile' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Profile Settings</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Update your personal information and public profile.</p>
              </div>

              {/* Avatar */}
              <div
                className="p-6 rounded-2xl mb-6"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <h3 className="text-sm font-semibold text-white mb-4">Profile Photo</h3>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=80&h=80&fit=crop&crop=face"
                      alt="Avatar"
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <button
                      className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white"
                      style={{ background: '#1565C0' }}
                    >
                      <Camera size={13} />
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-white mb-1 font-medium">Upload a new photo</p>
                    <p className="text-xs mb-3" style={{ color: '#8AA3C8' }}>JPG, PNG, GIF. Max 5MB. Recommended 400×400px.</p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg text-xs font-medium text-white" style={{ background: '#1565C0' }}>
                        Upload Photo
                      </button>
                      <button className="px-4 py-2 rounded-lg text-xs font-medium" style={{ background: 'rgba(244,67,54,0.12)', color: '#F44336' }}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div
                className="p-6 rounded-2xl space-y-5"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Full Name</label>
                    <input
                      type="text"
                      value={profileForm.fullName}
                      onChange={e => setProfileForm(p => ({ ...p, fullName: e.target.value }))}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Username</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: '#8AA3C8' }}>@</span>
                      <input
                        type="text"
                        value={profileForm.username}
                        onChange={e => setProfileForm(p => ({ ...p, username: e.target.value }))}
                        style={{ ...inputStyle, paddingLeft: '28px' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Email Address</label>
                  <div className="flex gap-3">
                    <input type="email" value={profileForm.email} onChange={e => setProfileForm(p => ({ ...p, email: e.target.value }))} style={{ ...inputStyle, flex: 1 }} />
                    <button className="px-4 py-2 rounded-lg text-xs font-medium" style={{ background: 'rgba(100,150,255,0.1)', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.2)', whiteSpace: 'nowrap' }}>
                      Verify
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Bio</label>
                  <textarea
                    value={profileForm.bio}
                    onChange={e => setProfileForm(p => ({ ...p, bio: e.target.value }))}
                    rows={3}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                  <p className="text-xs mt-1" style={{ color: '#4A6080' }}>{profileForm.bio.length}/200 characters</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Location</label>
                    <input type="text" value={profileForm.location} onChange={e => setProfileForm(p => ({ ...p, location: e.target.value }))} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Website</label>
                    <input type="text" value={profileForm.website} onChange={e => setProfileForm(p => ({ ...p, website: e.target.value }))} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>Twitter / X</label>
                    <input type="text" value={profileForm.twitter} onChange={e => setProfileForm(p => ({ ...p, twitter: e.target.value }))} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>GitHub</label>
                    <input type="text" value={profileForm.github} onChange={e => setProfileForm(p => ({ ...p, github: e.target.value }))} style={inputStyle} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security tab */}
          {activeTab === 'security' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Security Settings</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Manage your password, 2FA, and active sessions.</p>
              </div>

              <div
                className="p-6 rounded-2xl mb-6"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Key size={15} style={{ color: '#8AA3C8' }} />
                  Change Password
                </h3>
                <div className="space-y-4">
                  {['Current Password', 'New Password', 'Confirm New Password'].map(label => (
                    <div key={label}>
                      <label className="block mb-1.5 text-xs font-medium" style={{ color: '#8AA3C8' }}>{label}</label>
                      <input type="password" placeholder="••••••••" style={inputStyle} />
                    </div>
                  ))}
                  <button className="px-5 py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: '#1565C0' }}>
                    Update Password
                  </button>
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield size={15} style={{ color: '#8AA3C8' }} />
                  Security Options
                </h3>
                <SettingRow
                  label="Two-Factor Authentication"
                  desc="Add an extra layer of security to your account with TOTP or SMS verification."
                >
                  <Toggle checked={twoFactor} onChange={setTwoFactor} />
                </SettingRow>
                <SettingRow
                  label="Login Notifications"
                  desc="Get email alerts when a new device signs into your account."
                >
                  <Toggle checked={loginAlerts} onChange={setLoginAlerts} />
                </SettingRow>
                <SettingRow
                  label="Active Sessions"
                  desc="You are currently logged in on 2 devices."
                >
                  <button className="px-4 py-2 rounded-lg text-xs font-medium" style={{ background: 'rgba(244,67,54,0.12)', color: '#F44336', border: '1px solid rgba(244,67,54,0.2)' }}>
                    Sign out all
                  </button>
                </SettingRow>

                {/* Sessions list */}
                <div className="mt-4 space-y-2">
                  {[
                    { device: 'Chrome on Windows 11', location: 'Algiers, Algeria', current: true, time: 'Active now' },
                    { device: 'Safari on iPhone 16', location: 'Oran, Algeria', current: false, time: '2 hours ago' },
                  ].map(session => (
                    <div
                      key={session.device}
                      className="flex items-center justify-between p-3 rounded-xl"
                      style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.1)' }}
                    >
                      <div>
                        <p className="text-xs font-medium text-white flex items-center gap-2">
                          {session.device}
                          {session.current && (
                            <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: 'rgba(76,175,80,0.15)', color: '#4CAF50', fontSize: '10px' }}>
                              Current
                            </span>
                          )}
                        </p>
                        <p className="text-xs" style={{ color: '#8AA3C8' }}>{session.location} · {session.time}</p>
                      </div>
                      {!session.current && (
                        <button className="text-xs" style={{ color: '#F44336' }}>Revoke</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notifications tab */}
          {activeTab === 'notifications' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Notification Settings</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Choose what you want to be notified about.</p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <div className="flex items-center justify-end gap-8 mb-4 text-xs font-medium pb-3" style={{ color: '#8AA3C8', borderBottom: '1px solid rgba(100,150,255,0.08)' }}>
                  <span className="flex items-center gap-1"><Mail size={12} /> Email</span>
                  <span className="flex items-center gap-1"><Bell size={12} /> In-App</span>
                </div>

                {[
                  { key: 'likes', label: 'Likes', desc: 'When someone likes your article' },
                  { key: 'comments', label: 'Comments', desc: 'When someone comments on your work' },
                  { key: 'suggestions', label: 'Modification Suggestions', desc: 'When someone suggests a change to your article' },
                  { key: 'follows', label: 'New Followers', desc: 'When someone starts following you' },
                  { key: 'ai', label: 'AI Insights', desc: 'AI-powered content recommendations and tips' },
                  { key: 'weeklyDigest', label: 'Weekly Digest', desc: 'A summary of your content performance' },
                ].map(({ key, label, desc }) => (
                  <div
                    key={key}
                    className="flex items-center py-3.5"
                    style={{ borderBottom: '1px solid rgba(100,150,255,0.08)' }}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#8AA3C8' }}>{desc}</p>
                    </div>
                    <div className="flex gap-12">
                      {key === 'weeklyDigest' ? (
                        <>
                          <Toggle
                            checked={notifs[`${key}Email` as keyof typeof notifs] as boolean ?? notifs.weeklyDigest}
                            onChange={v => setNotifs(p => ({ ...p, weeklyDigest: v }))}
                          />
                          <Toggle
                            checked={notifs[`${key}InApp` as keyof typeof notifs] as boolean ?? notifs.weeklyDigest}
                            onChange={v => setNotifs(p => ({ ...p, weeklyDigest: v }))}
                          />
                        </>
                      ) : (
                        <>
                          <Toggle
                            checked={notifs[`${key}Email` as keyof typeof notifs] as boolean}
                            onChange={v => setNotifs(p => ({ ...p, [`${key}Email`]: v }))}
                          />
                          <Toggle
                            checked={notifs[`${key}InApp` as keyof typeof notifs] as boolean}
                            onChange={v => setNotifs(p => ({ ...p, [`${key}InApp`]: v }))}
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Privacy tab */}
          {activeTab === 'privacy' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Privacy Settings</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Control your privacy and what others can see.</p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <SettingRow label="Public Profile" desc="Allow anyone to view your profile page.">
                  <Toggle checked={privacy.publicProfile} onChange={v => setPrivacy(p => ({ ...p, publicProfile: v }))} />
                </SettingRow>
                <SettingRow label="Show Email Address" desc="Display your email on your public profile.">
                  <Toggle checked={privacy.showEmail} onChange={v => setPrivacy(p => ({ ...p, showEmail: v }))} />
                </SettingRow>
                <SettingRow label="Show Follower Count" desc="Display your followers/following statistics publicly.">
                  <Toggle checked={privacy.showFollowers} onChange={v => setPrivacy(p => ({ ...p, showFollowers: v }))} />
                </SettingRow>
                <SettingRow label="Allow Modification Suggestions" desc="Let other users suggest changes to your published articles.">
                  <Toggle checked={privacy.allowSuggestions} onChange={v => setPrivacy(p => ({ ...p, allowSuggestions: v }))} />
                </SettingRow>
                <SettingRow label="Search Engine Indexing" desc="Allow search engines to index your public profile and articles.">
                  <Toggle checked={privacy.indexBySearch} onChange={v => setPrivacy(p => ({ ...p, indexBySearch: v }))} />
                </SettingRow>
                <SettingRow label="Default Article Visibility" desc="New articles are public by default (can be changed per article).">
                  <Toggle checked={privacy.defaultPublic} onChange={v => setPrivacy(p => ({ ...p, defaultPublic: v }))} />
                </SettingRow>
              </div>
            </div>
          )}

          {/* AI Preferences tab */}
          {activeTab === 'ai' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">AI Preferences</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Customize how NEURAL+ AI assists your writing.</p>
              </div>

              <div
                className="p-6 rounded-2xl mb-6"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Sparkles size={14} style={{ color: '#00BCD4' }} />
                  AI Model Configuration
                </h3>
                <p className="text-xs mb-4" style={{ color: '#8AA3C8' }}>Select which AI model powers your experience.</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'Gemini Pro', desc: 'Fast & accurate', badge: 'Default' },
                    { name: 'Gemini Ultra', desc: 'Most powerful', badge: 'Pro' },
                    { name: 'Custom', desc: 'Your fine-tuned model', badge: 'Enterprise' },
                  ].map(({ name, desc, badge }) => (
                    <button
                      key={name}
                      onClick={() => setAiPrefs(p => ({ ...p, model: name }))}
                      className="p-4 rounded-xl text-left transition-all"
                      style={{
                        background: aiPrefs.model === name ? 'rgba(0,188,212,0.1)' : '#112040',
                        border: aiPrefs.model === name ? '1px solid rgba(0,188,212,0.35)' : '1px solid rgba(100,150,255,0.12)',
                      }}
                    >
                      <div className="text-xs font-bold text-white mb-0.5">{name}</div>
                      <div className="text-xs mb-2" style={{ color: '#8AA3C8' }}>{desc}</div>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,188,212,0.15)', color: '#00BCD4' }}>{badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <SettingRow label="Auto-suggest improvements" desc="Show AI suggestions while you write.">
                  <Toggle checked={aiPrefs.autoSuggest} onChange={v => setAiPrefs(p => ({ ...p, autoSuggest: v }))} />
                </SettingRow>
                <SettingRow label="Improve content on save" desc="Automatically refine content when you save.">
                  <Toggle checked={aiPrefs.improveOnSave} onChange={v => setAiPrefs(p => ({ ...p, improveOnSave: v }))} />
                </SettingRow>
                <SettingRow label="AI visual generation" desc="Generate charts and images from your content.">
                  <Toggle checked={aiPrefs.generateVisuals} onChange={v => setAiPrefs(p => ({ ...p, generateVisuals: v }))} />
                </SettingRow>
                <SettingRow label="Tone analysis" desc="Analyze and suggest tone adjustments.">
                  <Toggle checked={aiPrefs.toneAnalysis} onChange={v => setAiPrefs(p => ({ ...p, toneAnalysis: v }))} />
                </SettingRow>
                <SettingRow label="Plagiarism check" desc="Scan your content for originality issues.">
                  <Toggle checked={aiPrefs.plagiarismCheck} onChange={v => setAiPrefs(p => ({ ...p, plagiarismCheck: v }))} />
                </SettingRow>
              </div>
            </div>
          )}

          {/* Appearance tab */}
          {activeTab === 'appearance' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Appearance</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Customize the look and feel of NEURAL+.</p>
              </div>

              <div
                className="p-6 rounded-2xl mb-6"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <h3 className="text-sm font-semibold text-white mb-4">Theme</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'dark', label: 'Dark', icon: Moon },
                    { key: 'light', label: 'Light', icon: Sun },
                    { key: 'system', label: 'System', icon: Monitor },
                  ].map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setTheme(key as any)}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all"
                      style={{
                        background: theme === key ? 'rgba(21,101,192,0.2)' : '#112040',
                        border: theme === key ? '1px solid rgba(21,101,192,0.4)' : '1px solid rgba(100,150,255,0.12)',
                        color: theme === key ? '#60A5FA' : '#8AA3C8',
                      }}
                    >
                      <Icon size={20} />
                      <span className="text-xs font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <h3 className="text-sm font-semibold text-white mb-4">Editor Font Size</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={12}
                    max={24}
                    value={fontSize}
                    onChange={e => setFontSize(e.target.value)}
                    className="flex-1"
                    style={{ accentColor: '#1565C0' }}
                  />
                  <span className="text-sm text-white w-12 text-right">{fontSize}px</span>
                </div>
              </div>
            </div>
          )}

          {/* Export tab */}
          {activeTab === 'export' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Export & Data</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Download your content and data.</p>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Export All Articles', desc: 'Download all your articles in your preferred format', formats: ['PDF', 'DOCX', 'Markdown', 'HTML'] },
                  { title: 'Export Account Data', desc: 'Download a complete archive of your account data', formats: ['JSON', 'CSV'] },
                  { title: 'Export Analytics', desc: 'Download your content performance analytics', formats: ['CSV', 'Excel'] },
                ].map(({ title, desc, formats }) => (
                  <div
                    key={title}
                    className="p-6 rounded-2xl"
                    style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
                  >
                    <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                    <p className="text-xs mb-4" style={{ color: '#8AA3C8' }}>{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {formats.map(fmt => (
                        <button
                          key={fmt}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                          style={{ background: '#112040', color: '#C8D8F0', border: '1px solid rgba(100,150,255,0.15)' }}
                        >
                          <Download size={12} />
                          {fmt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Danger Zone tab */}
          {activeTab === 'danger' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold" style={{ color: '#F44336' }}>Danger Zone</h2>
                <p className="text-sm mt-1" style={{ color: '#8AA3C8' }}>Irreversible actions. Proceed with caution.</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Deactivate Account',
                    desc: 'Temporarily deactivate your account. Your articles remain but your profile becomes private. You can reactivate at any time.',
                    btnLabel: 'Deactivate Account',
                    btnColor: '#FF9800',
                    bgColor: 'rgba(255,152,0,0.08)',
                    borderColor: 'rgba(255,152,0,0.2)',
                  },
                  {
                    title: 'Delete All Articles',
                    desc: 'Permanently delete all your articles and their content. This action cannot be undone.',
                    btnLabel: 'Delete All Articles',
                    btnColor: '#F44336',
                    bgColor: 'rgba(244,67,54,0.08)',
                    borderColor: 'rgba(244,67,54,0.2)',
                  },
                  {
                    title: 'Delete Account',
                    desc: 'Permanently delete your NEURAL+ account and all associated data including articles, comments, and settings. This cannot be undone.',
                    btnLabel: 'Delete My Account',
                    btnColor: '#F44336',
                    bgColor: 'rgba(244,67,54,0.08)',
                    borderColor: 'rgba(244,67,54,0.2)',
                  },
                ].map(({ title, desc, btnLabel, btnColor, bgColor, borderColor }) => (
                  <div
                    key={title}
                    className="p-6 rounded-2xl"
                    style={{ background: bgColor, border: `1px solid ${borderColor}` }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <AlertTriangle size={18} style={{ color: btnColor, flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                        <p className="text-xs leading-relaxed" style={{ color: '#8AA3C8' }}>{desc}</p>
                      </div>
                    </div>
                    <button
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                      style={{ background: 'transparent', color: btnColor, border: `1px solid ${btnColor}40` }}
                    >
                      {btnLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save button */}
          {!['danger', 'export'].includes(activeTab) && (
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #1565C0, #0288D1)', boxShadow: '0 4px 16px rgba(21,101,192,0.35)' }}
              >
                {saved ? <Check size={16} /> : <Save size={16} />}
                {saved ? 'Saved!' : 'Save Changes'}
              </button>
              {saved && (
                <span className="text-sm" style={{ color: '#4CAF50' }}>
                  ✓ Settings saved successfully
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}