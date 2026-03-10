import { useNavigate } from 'react-router';
import {
  FileText, Eye, Heart, Users, Plus, TrendingUp, Clock,
  Sparkles, MoreHorizontal, Globe, Lock, Edit3, Trash2,
  ArrowUpRight, Bookmark, MessageSquare, Upload, Zap, GitMerge
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const viewsData = [
  { day: 'Mon', views: 420, likes: 38 },
  { day: 'Tue', views: 680, likes: 52 },
  { day: 'Wed', views: 540, likes: 41 },
  { day: 'Thu', views: 890, likes: 73 },
  { day: 'Fri', views: 720, likes: 60 },
  { day: 'Sat', views: 950, likes: 88 },
  { day: 'Sun', views: 1100, likes: 95 },
];

const myArticles = [
  {
    id: '1',
    title: 'The Future of Generative AI in Content Creation',
    status: 'published',
    views: 4821,
    likes: 312,
    comments: 47,
    updatedAt: '2 hours ago',
    readTime: '8 min',
    tags: ['AI', 'Content'],
    coverColor: '#1565C0',
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js and Express',
    status: 'published',
    views: 2340,
    likes: 189,
    comments: 23,
    updatedAt: '1 day ago',
    readTime: '12 min',
    tags: ['Development', 'Backend'],
    coverColor: '#00796B',
  },
  {
    id: '3',
    title: 'Understanding Neural Networks from Scratch',
    status: 'draft',
    views: 0,
    likes: 0,
    comments: 0,
    updatedAt: '3 hours ago',
    readTime: '15 min',
    tags: ['AI', 'Machine Learning'],
    coverColor: '#7B1FA2',
  },
  {
    id: '4',
    title: 'Design Systems: Building Consistent UX at Scale',
    status: 'published',
    views: 1876,
    likes: 143,
    comments: 18,
    updatedAt: '5 days ago',
    readTime: '10 min',
    tags: ['Design', 'UX'],
    coverColor: '#E64A19',
  },
  {
    id: '5',
    title: 'PostgreSQL Performance Optimization Techniques',
    status: 'private',
    views: 0,
    likes: 0,
    comments: 0,
    updatedAt: '1 week ago',
    readTime: '20 min',
    tags: ['Database', 'PostgreSQL'],
    coverColor: '#1976D2',
  },
];

const exploreArticles = [
  {
    id: '6',
    title: 'Machine Learning in Production: Lessons Learned',
    author: 'Akram Litniti',
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=32&h=32&fit=crop&crop=face',
    views: 8200,
    likes: 634,
    readTime: '11 min',
  },
  {
    id: '7',
    title: 'The Art of Technical Writing',
    author: 'Badr Farhani',
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=32&h=32&fit=crop&crop=face',
    views: 5100,
    likes: 421,
    readTime: '7 min',
  },
  {
    id: '8',
    title: 'React 19 Deep Dive: New Features & Migration',
    author: 'Ilias Jbilou',
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=32&h=32&fit=crop&crop=face',
    views: 12400,
    likes: 892,
    readTime: '14 min',
  },
];

const stats = [
  { label: 'Total Articles', value: '24', change: '+3 this month', icon: FileText, color: '#1565C0' },
  { label: 'Total Views', value: '18.4K', change: '+23% this week', icon: Eye, color: '#00BCD4' },
  { label: 'Total Likes', value: '1,247', change: '+87 today', icon: Heart, color: '#E91E63' },
  { label: 'Collaborators', value: '38', change: '5 pending', icon: Users, color: '#4CAF50' },
];

const aiSuggestions = [
  { text: 'Improve SEO in "Future of AI" article', type: 'optimize' },
  { text: 'Add a visual to "Neural Networks" draft', type: 'visual' },
  { text: 'Pending collaboration on "Design Systems"', type: 'collab' },
];

function StatCard({ label, value, change, icon: Icon, color }: typeof stats[0]) {
  return (
    <div
      className="p-5 rounded-2xl flex flex-col gap-3"
      style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm" style={{ color: '#8AA3C8' }}>{label}</span>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <Icon size={17} style={{ color }} />
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-xs mt-0.5 flex items-center gap-1" style={{ color: '#4CAF50' }}>
          <TrendingUp size={11} />
          {change}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Welcome banner */}
      <div
        className="p-6 rounded-2xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0D2150 0%, #0C3060 100%)',
          border: '1px solid rgba(21,101,192,0.3)',
        }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-64 opacity-10"
          style={{ background: 'radial-gradient(ellipse at right, #00BCD4, transparent)', filter: 'blur(40px)' }} />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Good morning, Mohamed 👋</h1>
            <p className="text-sm" style={{ color: '#8AA3C8' }}>You have 3 pending collaborations and 2 article drafts in progress.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/app/editor')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1565C0, #0288D1)', boxShadow: '0 4px 16px rgba(21,101,192,0.35)' }}
            >
              <Plus size={15} />
              New Article
            </button>
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#E8F0FE' }}
            >
              <Upload size={15} />
              Import
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Analytics chart */}
        <div
          className="lg:col-span-2 p-6 rounded-2xl"
          style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-semibold text-white">Analytics Overview</h2>
              <p className="text-xs mt-0.5" style={{ color: '#8AA3C8' }}>Views and likes — last 7 days</p>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="flex items-center gap-1.5" style={{ color: '#1565C0' }}>
                <span className="w-2.5 h-2.5 rounded-sm" style={{ background: '#1565C0' }} /> Views
              </span>
              <span className="flex items-center gap-1.5" style={{ color: '#E91E63' }}>
                <span className="w-2.5 h-2.5 rounded-sm" style={{ background: '#E91E63' }} /> Likes
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={viewsData}>
              <defs>
                <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1565C0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#1565C0" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="likesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E91E63" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#E91E63" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fill: '#8AA3C8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#8AA3C8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', borderRadius: '10px', color: '#E8F0FE' }}
                cursor={{ stroke: 'rgba(100,150,255,0.2)' }}
              />
              <Area type="monotone" dataKey="views" stroke="#1565C0" strokeWidth={2} fill="url(#viewsGrad)" />
              <Area type="monotone" dataKey="likes" stroke="#E91E63" strokeWidth={2} fill="url(#likesGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* AI Suggestions */}
        <div
          className="p-6 rounded-2xl"
          style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(0,188,212,0.15)', border: '1px solid rgba(0,188,212,0.3)' }}>
              <Sparkles size={14} style={{ color: '#00BCD4' }} />
            </div>
            <h2 className="text-base font-semibold text-white">AI Insights</h2>
          </div>

          <div className="space-y-3 mb-6">
            {aiSuggestions.map(({ text, type }) => (
              <div
                key={text}
                className="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all hover:scale-[1.01]"
                style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.1)' }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: type === 'optimize' ? 'rgba(0,188,212,0.15)' : type === 'visual' ? 'rgba(21,101,192,0.15)' : 'rgba(76,175,80,0.15)',
                  }}
                >
                  {type === 'optimize' ? <Zap size={11} style={{ color: '#00BCD4' }} /> :
                   type === 'visual' ? <Eye size={11} style={{ color: '#1565C0' }} /> :
                   <Users size={11} style={{ color: '#4CAF50' }} />}
                </div>
                <span className="text-xs leading-relaxed" style={{ color: '#C8D8F0' }}>{text}</span>
              </div>
            ))}
          </div>

          <button
            className="w-full py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ background: 'rgba(0,188,212,0.1)', border: '1px solid rgba(0,188,212,0.2)', color: '#00BCD4' }}
          >
            Open AI Assistant
          </button>
        </div>
      </div>

      {/* My Articles */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-white">My Articles</h2>
          <button className="text-sm flex items-center gap-1" style={{ color: '#1565C0' }}>
            View all <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="space-y-3">
          {myArticles.map(article => (
            <div
              key={article.id}
              className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.005] cursor-pointer group"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              {/* Color indicator */}
              <div
                className="w-1 h-12 rounded-full shrink-0"
                style={{ background: article.coverColor }}
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className="text-sm font-semibold text-white truncate"
                    onClick={() => navigate(`/app/article/${article.id}`)}
                  >
                    {article.title}
                  </h3>
                  <span
                    className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs shrink-0"
                    style={{
                      background: article.status === 'published' ? 'rgba(76,175,80,0.12)' : article.status === 'draft' ? 'rgba(255,152,0,0.12)' : 'rgba(100,150,255,0.12)',
                      color: article.status === 'published' ? '#4CAF50' : article.status === 'draft' ? '#FF9800' : '#8AA3C8',
                      border: `1px solid ${article.status === 'published' ? 'rgba(76,175,80,0.25)' : article.status === 'draft' ? 'rgba(255,152,0,0.25)' : 'rgba(100,150,255,0.2)'}`,
                    }}
                  >
                    {article.status === 'published' ? <Globe size={10} /> : article.status === 'draft' ? <Clock size={10} /> : <Lock size={10} />}
                    {article.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs" style={{ color: '#8AA3C8' }}>
                  <span className="flex items-center gap-1"><Eye size={11} />{article.views.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><Heart size={11} />{article.likes}</span>
                  <span className="flex items-center gap-1"><MessageSquare size={11} />{article.comments}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                  <span>{article.updatedAt}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                <button
                  onClick={() => navigate(`/app/editor/${article.id}`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
                  style={{ background: 'rgba(21,101,192,0.15)', color: '#60A5FA', border: '1px solid rgba(21,101,192,0.25)' }}
                >
                  <Edit3 size={12} /> Edit
                </button>
                <button
                  className="p-1.5 rounded-lg transition-all"
                  style={{ background: 'rgba(244,67,54,0.12)', color: '#F44336' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-white">Trending on NEURAL+</h2>
          <button className="text-sm flex items-center gap-1" style={{ color: '#1565C0' }}>
            Explore all <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {exploreArticles.map(article => (
            <div
              key={article.id}
              className="p-5 rounded-2xl cursor-pointer transition-all hover:scale-[1.02]"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
              onClick={() => navigate(`/app/article/${article.id}`)}
            >
              <h3 className="text-sm font-semibold text-white mb-3 leading-snug">{article.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={article.avatar} alt={article.author} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs" style={{ color: '#8AA3C8' }}>{article.author}</span>
                </div>
                <div className="flex items-center gap-3 text-xs" style={{ color: '#8AA3C8' }}>
                  <span className="flex items-center gap-1"><Heart size={10} />{article.likes}</span>
                  <span className="flex items-center gap-1"><Eye size={10} />{(article.views / 1000).toFixed(1)}K</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6">
        {[
          { icon: Plus, label: 'New Article', action: () => navigate('/app/editor'), color: '#1565C0' },
          { icon: Upload, label: 'Import Document', action: () => navigate('/app/editor'), color: '#00BCD4' },
          { icon: GitMerge, label: 'Collaboration', action: () => navigate('/app/collaboration'), color: '#4CAF50' },
          { icon: Bookmark, label: 'Saved Articles', action: () => {}, color: '#FF9800' },
        ].map(({ icon: Icon, label, action, color }) => (
          <button
            key={label}
            onClick={action}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-all hover:scale-[1.02]"
            style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
              <Icon size={18} style={{ color }} />
            </div>
            <span className="text-xs font-medium text-white">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}