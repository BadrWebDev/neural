import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  FileText, Eye, Heart, Users, Edit3, Globe, Lock,
  Clock, MapPin, Link2, Twitter, Github, Calendar,
  TrendingUp, Bookmark, MessageSquare, Award, Star
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const USER = {
  name: 'Mohamed Nour Zidani',
  username: '@m.zidani',
  avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=120&h=120&fit=crop&crop=face',
  coverImage: 'https://images.unsplash.com/photo-1652498196872-ce0caa66642e?w=1200&fit=crop',
  bio: 'Software engineer & AI researcher. Building the future of collaborative content creation. Former @TechLab. Open-source enthusiast.',
  location: 'Algiers, Algeria',
  website: 'mnzidani.dev',
  twitter: '@m_zidani',
  github: 'mnzidani',
  joinedAt: 'January 2025',
  isFollowing: false,
  stats: {
    articles: 24,
    followers: 1840,
    following: 312,
    totalViews: 184200,
    totalLikes: 12470,
    bookmarks: 89,
  },
};

const MONTHLY_VIEWS = [
  { month: 'Aug', views: 2100 },
  { month: 'Sep', views: 3400 },
  { month: 'Oct', views: 2800 },
  { month: 'Nov', views: 4600 },
  { month: 'Dec', views: 5200 },
  { month: 'Jan', views: 6800 },
  { month: 'Feb', views: 8100 },
  { month: 'Mar', views: 9400 },
];

const ARTICLES = [
  {
    id: '1',
    title: 'The Future of Generative AI in Content Creation',
    status: 'published',
    views: 4821,
    likes: 312,
    comments: 47,
    readTime: '8 min',
    updatedAt: 'March 8, 2026',
    tags: ['AI', 'Content'],
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js and Express',
    status: 'published',
    views: 2340,
    likes: 189,
    comments: 23,
    readTime: '12 min',
    updatedAt: 'March 5, 2026',
    tags: ['Backend', 'Development'],
  },
  {
    id: '3',
    title: 'Understanding Neural Networks from Scratch',
    status: 'draft',
    views: 0,
    likes: 0,
    comments: 0,
    readTime: '15 min',
    updatedAt: 'March 9, 2026',
    tags: ['AI', 'Machine Learning'],
  },
  {
    id: '4',
    title: 'Design Systems: Building Consistent UX at Scale',
    status: 'published',
    views: 1876,
    likes: 143,
    comments: 18,
    readTime: '10 min',
    updatedAt: 'February 28, 2026',
    tags: ['Design', 'UX'],
  },
];

const ACHIEVEMENTS = [
  { icon: Star, label: 'Top Creator', desc: 'Published 20+ articles', color: '#FF9800' },
  { icon: TrendingUp, label: '10K Views', desc: 'Monthly milestone', color: '#1565C0' },
  { icon: Users, label: 'Collaborator', desc: '50+ approved suggestions', color: '#4CAF50' },
  { icon: Award, label: 'Verified Author', desc: 'Quality content creator', color: '#9C27B0' },
];

const TABS = ['Articles', 'Achievements', 'Activity'] as const;
type Tab = typeof TABS[number];

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('Articles');
  const [following, setFollowing] = useState(USER.isFollowing);
  const [articleFilter, setArticleFilter] = useState<'all' | 'published' | 'draft' | 'private'>('all');

  const filteredArticles = ARTICLES.filter(a =>
    articleFilter === 'all' || a.status === articleFilter
  );

  return (
    <div style={{ background: '#060D1A', color: '#E8F0FE', minHeight: '100vh' }}>
      {/* Cover */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={USER.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, #060D1A 0%, transparent 60%)' }} />

        {/* Edit cover button */}
        <button
          className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white"
          style={{ background: 'rgba(12,22,41,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <Edit3 size={12} />
          Edit Cover
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 -mt-14 mb-8 relative z-10">
          <div className="relative">
            <img
              src={USER.avatar}
              alt={USER.name}
              className="w-24 h-24 rounded-2xl object-cover"
              style={{ border: '3px solid #060D1A', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2"
              style={{ background: '#4CAF50', borderColor: '#060D1A' }}
            />
          </div>

          <div className="flex-1 pt-14 sm:pt-0 sm:mt-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-bold text-white mb-0.5">{USER.name}</h1>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>{USER.username}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setFollowing(!following)}
                  className="px-5 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105"
                  style={{
                    background: following ? 'rgba(100,150,255,0.1)' : 'linear-gradient(135deg, #1565C0, #0288D1)',
                    color: following ? '#8AA3C8' : 'white',
                    border: following ? '1px solid rgba(100,150,255,0.2)' : 'none',
                    boxShadow: !following ? '0 4px 16px rgba(21,101,192,0.3)' : 'none',
                  }}
                >
                  {following ? 'Following' : 'Follow'}
                </button>
                <button
                  onClick={() => navigate('/app/settings')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                  style={{ background: '#0C1629', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
                >
                  <Edit3 size={13} />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left sidebar */}
          <div className="space-y-5">
            {/* Bio */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#C8D8F0' }}>{USER.bio}</p>
              <div className="space-y-2">
                {[
                  { icon: MapPin, text: USER.location },
                  { icon: Link2, text: USER.website, link: true },
                  { icon: Twitter, text: USER.twitter },
                  { icon: Github, text: USER.github },
                  { icon: Calendar, text: `Joined ${USER.joinedAt}` },
                ].map(({ icon: Icon, text, link }) => (
                  <div key={text} className="flex items-center gap-2 text-xs" style={{ color: '#8AA3C8' }}>
                    <Icon size={13} style={{ flexShrink: 0 }} />
                    <span className={link ? 'text-blue-400 cursor-pointer' : ''}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Articles', value: USER.stats.articles, icon: FileText, color: '#1565C0' },
                  { label: 'Followers', value: USER.stats.followers.toLocaleString(), icon: Users, color: '#00BCD4' },
                  { label: 'Following', value: USER.stats.following, icon: Users, color: '#4CAF50' },
                  { label: 'Total Likes', value: `${(USER.stats.totalLikes / 1000).toFixed(1)}K`, icon: Heart, color: '#E91E63' },
                  { label: 'Total Views', value: `${(USER.stats.totalViews / 1000).toFixed(0)}K`, icon: Eye, color: '#FF9800' },
                  { label: 'Bookmarks', value: USER.stats.bookmarks, icon: Bookmark, color: '#9C27B0' },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="p-3 rounded-xl"
                    style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.08)' }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon size={11} style={{ color }} />
                      <span className="text-xs" style={{ color: '#8AA3C8' }}>{label}</span>
                    </div>
                    <div className="text-sm font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Views chart */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp size={14} style={{ color: '#00BCD4' }} />
                Views Growth
              </h3>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={MONTHLY_VIEWS}>
                  <XAxis dataKey="month" tick={{ fill: '#8AA3C8', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', borderRadius: '8px', color: '#E8F0FE', fontSize: '12px' }}
                    cursor={{ fill: 'rgba(100,150,255,0.06)' }}
                  />
                  <Bar dataKey="views" fill="#1565C0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div
              className="flex gap-1 p-1 rounded-xl mb-6 w-fit"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: activeTab === tab ? '#1565C0' : 'transparent',
                    color: activeTab === tab ? 'white' : '#8AA3C8',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'Articles' && (
              <>
                {/* Article filter */}
                <div className="flex gap-2 mb-5">
                  {(['all', 'published', 'draft', 'private'] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setArticleFilter(f)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                      style={{
                        background: articleFilter === f ? 'rgba(21,101,192,0.2)' : 'rgba(100,150,255,0.08)',
                        color: articleFilter === f ? '#60A5FA' : '#8AA3C8',
                        border: articleFilter === f ? '1px solid rgba(21,101,192,0.3)' : '1px solid rgba(100,150,255,0.12)',
                      }}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {filteredArticles.map(article => (
                    <div
                      key={article.id}
                      className="p-5 rounded-2xl cursor-pointer transition-all hover:scale-[1.01] group"
                      style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
                      onClick={() => navigate(`/app/article/${article.id}`)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                              {article.title}
                            </h3>
                            <span
                              className="px-2 py-0.5 rounded-full text-xs shrink-0"
                              style={{
                                background: article.status === 'published' ? 'rgba(76,175,80,0.12)' : article.status === 'draft' ? 'rgba(255,152,0,0.12)' : 'rgba(100,150,255,0.12)',
                                color: article.status === 'published' ? '#4CAF50' : article.status === 'draft' ? '#FF9800' : '#8AA3C8',
                              }}
                            >
                              {article.status}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {article.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded-full text-xs"
                                style={{ background: '#112040', color: '#8AA3C8' }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-xs" style={{ color: '#8AA3C8' }}>
                            <span className="flex items-center gap-1"><Eye size={11} />{article.views.toLocaleString()}</span>
                            <span className="flex items-center gap-1"><Heart size={11} />{article.likes}</span>
                            <span className="flex items-center gap-1"><MessageSquare size={11} />{article.comments}</span>
                            <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                            <span>{article.updatedAt}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          <button
                            onClick={e => { e.stopPropagation(); navigate(`/app/editor/${article.id}`); }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
                            style={{ background: 'rgba(21,101,192,0.15)', color: '#60A5FA', border: '1px solid rgba(21,101,192,0.25)' }}
                          >
                            <Edit3 size={12} /> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'Achievements' && (
              <div className="grid sm:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map(({ icon: Icon, label, desc, color }) => (
                  <div
                    key={label}
                    className="p-6 rounded-2xl flex items-center gap-4"
                    style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                    >
                      <Icon size={26} style={{ color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{label}</h3>
                      <p className="text-xs" style={{ color: '#8AA3C8' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Activity' && (
              <div className="space-y-3">
                {[
                  { type: 'published', text: 'Published "The Future of Generative AI in Content Creation"', time: '2 hours ago', icon: Globe, color: '#4CAF50' },
                  { type: 'collab', text: 'Approved a modification suggestion from Akram Litniti', time: '5 hours ago', icon: Users, color: '#00BCD4' },
                  { type: 'edit', text: 'Saved draft "Understanding Neural Networks from Scratch"', time: '3 hours ago', icon: Edit3, color: '#FF9800' },
                  { type: 'like', text: 'Received 312 new likes on your AI article', time: '1 day ago', icon: Heart, color: '#E91E63' },
                  { type: 'published', text: 'Published "Building Scalable APIs with Node.js"', time: '5 days ago', icon: Globe, color: '#4CAF50' },
                  { type: 'follow', text: '48 new followers this week', time: '1 week ago', icon: Users, color: '#1565C0' },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.08)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${activity.color}18`, border: `1px solid ${activity.color}30` }}
                    >
                      <activity.icon size={16} style={{ color: activity.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{activity.text}</p>
                    </div>
                    <span className="text-xs shrink-0" style={{ color: '#4A6080' }}>{activity.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
