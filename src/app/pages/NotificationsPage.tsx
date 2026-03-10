import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Bell, Heart, MessageSquare, GitMerge, Users, Sparkles,
  CheckCircle, Eye, Star, BellOff, Check, Filter, Trash2
} from 'lucide-react';

type NotifType = 'all' | 'likes' | 'comments' | 'suggestions' | 'follows' | 'ai';

interface Notification {
  id: string;
  type: Exclude<NotifType, 'all'>;
  read: boolean;
  avatar: string;
  title: string;
  body: string;
  time: string;
  actionLabel?: string;
  actionPath?: string;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'suggestions',
    read: false,
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face',
    title: 'New modification suggestion',
    body: 'Akram Litniti suggested a change to your article "The Future of Generative AI in Content Creation".',
    time: '2 minutes ago',
    actionLabel: 'Review suggestion',
    actionPath: '/app/collaboration',
  },
  {
    id: '2',
    type: 'likes',
    read: false,
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face',
    title: 'Your article is trending',
    body: '47 people liked "The Future of Generative AI in Content Creation" in the last hour.',
    time: '15 minutes ago',
    actionLabel: 'View article',
    actionPath: '/app/article/1',
  },
  {
    id: '3',
    type: 'ai',
    read: false,
    avatar: '',
    title: 'AI improvement ready',
    body: 'NEURAL+ AI has finished analyzing your draft "Understanding Neural Networks from Scratch" and has 8 improvement suggestions ready.',
    time: '30 minutes ago',
    actionLabel: 'Open in editor',
    actionPath: '/app/editor/3',
  },
  {
    id: '4',
    type: 'comments',
    read: false,
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face',
    title: 'New comment on your article',
    body: 'Ilias Jbilou commented: "Would love to see a follow-up on the multimodal generation point..."',
    time: '1 hour ago',
    actionLabel: 'View comment',
    actionPath: '/app/article/1',
  },
  {
    id: '5',
    type: 'follows',
    read: true,
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face',
    title: 'New follower',
    body: 'Sarah Chen started following you. She writes about AI and technical writing.',
    time: '3 hours ago',
    actionLabel: 'View profile',
    actionPath: '/app/profile',
  },
  {
    id: '6',
    type: 'suggestions',
    read: true,
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face',
    title: 'Suggestion approved!',
    body: 'Your modification suggestion to "Building Scalable APIs" was approved and applied by Badr Farhani.',
    time: '5 hours ago',
    actionLabel: 'View article',
    actionPath: '/app/article/2',
  },
  {
    id: '7',
    type: 'likes',
    read: true,
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face',
    title: '100 likes milestone!',
    body: '"Building Scalable APIs with Node.js" just reached 100 likes. Congratulations!',
    time: '1 day ago',
    actionLabel: 'See stats',
    actionPath: '/app/article/2',
  },
  {
    id: '8',
    type: 'ai',
    read: true,
    avatar: '',
    title: 'Weekly AI digest',
    body: 'Your content had 8,400 views this week. NEURAL+ AI identified 3 trending topics you could write about based on your interests.',
    time: '2 days ago',
    actionLabel: 'See insights',
    actionPath: '/app',
  },
  {
    id: '9',
    type: 'comments',
    read: true,
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face',
    title: 'Badr Farhani replied to your comment',
    body: 'Badr Farhani replied: "The human + AI framing is exactly right. Tools that empower rather than replace are the future."',
    time: '3 days ago',
    actionLabel: 'View thread',
    actionPath: '/app/article/1',
  },
  {
    id: '10',
    type: 'follows',
    read: true,
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face',
    title: '50 new followers this month',
    body: 'You\'ve gained 50 new followers this month. Your content is growing in reach!',
    time: '1 week ago',
    actionLabel: 'View profile',
    actionPath: '/app/profile',
  },
];

const FILTER_TABS: { key: NotifType; label: string; icon: React.ElementType; color: string }[] = [
  { key: 'all', label: 'All', icon: Bell, color: '#8AA3C8' },
  { key: 'likes', label: 'Likes', icon: Heart, color: '#E91E63' },
  { key: 'comments', label: 'Comments', icon: MessageSquare, color: '#1565C0' },
  { key: 'suggestions', label: 'Suggestions', icon: GitMerge, color: '#00BCD4' },
  { key: 'follows', label: 'Follows', icon: Users, color: '#4CAF50' },
  { key: 'ai', label: 'AI Insights', icon: Sparkles, color: '#FF9800' },
];

const TYPE_ICON: Record<Exclude<NotifType, 'all'>, { icon: React.ElementType; color: string }> = {
  likes: { icon: Heart, color: '#E91E63' },
  comments: { icon: MessageSquare, color: '#1565C0' },
  suggestions: { icon: GitMerge, color: '#00BCD4' },
  follows: { icon: Users, color: '#4CAF50' },
  ai: { icon: Sparkles, color: '#FF9800' },
};

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState<NotifType>('all');

  const filtered = activeFilter === 'all'
    ? notifications
    : notifications.filter(n => n.type === activeFilter);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotif = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8" style={{ color: '#E8F0FE' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            Notifications
            {unreadCount > 0 && (
              <span
                className="px-2 py-0.5 rounded-full text-sm font-bold text-white"
                style={{ background: '#1565C0', fontSize: '12px' }}
              >
                {unreadCount}
              </span>
            )}
          </h1>
          <p className="text-sm mt-1" style={{ color: '#8AA3C8' }}>
            {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={{ background: 'rgba(100,150,255,0.1)', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
          >
            <CheckCircle size={14} />
            Mark all read
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={{ background: 'rgba(100,150,255,0.1)', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
          >
            <Filter size={14} />
            Preferences
          </button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {FILTER_TABS.map(({ key, label, icon: Icon, color }) => {
          const count = key === 'all' ? notifications.length : notifications.filter(n => n.type === key).length;
          return (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all"
              style={{
                background: activeFilter === key ? 'rgba(21,101,192,0.2)' : 'rgba(100,150,255,0.06)',
                color: activeFilter === key ? '#60A5FA' : '#8AA3C8',
                border: activeFilter === key ? '1px solid rgba(21,101,192,0.35)' : '1px solid rgba(100,150,255,0.1)',
              }}
            >
              <Icon size={14} style={{ color: activeFilter === key ? '#60A5FA' : color }} />
              {label}
              <span
                className="px-1.5 py-0.5 rounded-full"
                style={{
                  background: activeFilter === key ? 'rgba(21,101,192,0.3)' : 'rgba(100,150,255,0.1)',
                  color: activeFilter === key ? '#60A5FA' : '#8AA3C8',
                  fontSize: '11px',
                  minWidth: 20,
                  textAlign: 'center',
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Notifications list */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <BellOff size={48} style={{ color: '#4A6080', margin: '0 auto 1rem' }} />
          <p className="text-white font-medium mb-2">No notifications</p>
          <p className="text-sm" style={{ color: '#8AA3C8' }}>You're all caught up!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {/* Today group */}
          <p className="text-xs font-medium px-1 mb-3" style={{ color: '#4A6080' }}>TODAY</p>
          {filtered.filter(n => ['2 minutes ago', '15 minutes ago', '30 minutes ago', '1 hour ago', '3 hours ago', '5 hours ago'].some(t => n.time === t)).map(notif => {
            const { icon: TypeIcon, color } = TYPE_ICON[notif.type];
            return (
              <div
                key={notif.id}
                onClick={() => { markRead(notif.id); if (notif.actionPath) navigate(notif.actionPath); }}
                className="flex gap-4 p-4 rounded-2xl cursor-pointer transition-all group hover:scale-[1.005]"
                style={{
                  background: notif.read ? '#0C1629' : 'rgba(21,101,192,0.08)',
                  border: notif.read ? '1px solid rgba(100,150,255,0.08)' : '1px solid rgba(21,101,192,0.2)',
                }}
              >
                {/* Avatar or AI icon */}
                <div className="relative shrink-0">
                  {notif.type === 'ai' ? (
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,152,0,0.15)', border: '1px solid rgba(255,152,0,0.3)' }}
                    >
                      <Sparkles size={18} style={{ color: '#FF9800' }} />
                    </div>
                  ) : (
                    <img src={notif.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                  )}
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: '#0C1629', border: `2px solid ${color}` }}
                  >
                    <TypeIcon size={10} style={{ color }} />
                  </div>
                  {!notif.read && (
                    <div
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                      style={{ background: '#1565C0', border: '2px solid #060D1A' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: notif.read ? '#C8D8F0' : 'white' }}
                    >
                      {notif.title}
                    </p>
                    <span className="text-xs shrink-0" style={{ color: '#4A6080' }}>{notif.time}</span>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: '#8AA3C8' }}>
                    {notif.body}
                  </p>
                  {notif.actionLabel && (
                    <span
                      className="text-xs font-medium"
                      style={{ color: '#1565C0' }}
                    >
                      {notif.actionLabel} →
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  {!notif.read && (
                    <button
                      onClick={e => { e.stopPropagation(); markRead(notif.id); }}
                      className="p-1.5 rounded-lg"
                      style={{ background: 'rgba(76,175,80,0.12)', color: '#4CAF50' }}
                      title="Mark as read"
                    >
                      <Check size={12} />
                    </button>
                  )}
                  <button
                    onClick={e => { e.stopPropagation(); deleteNotif(notif.id); }}
                    className="p-1.5 rounded-lg"
                    style={{ background: 'rgba(244,67,54,0.12)', color: '#F44336' }}
                    title="Delete"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Earlier group */}
          {filtered.filter(n => ['1 day ago', '2 days ago', '3 days ago', '1 week ago'].some(t => n.time === t)).length > 0 && (
            <>
              <p className="text-xs font-medium px-1 mt-6 mb-3" style={{ color: '#4A6080' }}>EARLIER</p>
              {filtered.filter(n => ['1 day ago', '2 days ago', '3 days ago', '1 week ago'].some(t => n.time === t)).map(notif => {
                const { icon: TypeIcon, color } = TYPE_ICON[notif.type];
                return (
                  <div
                    key={notif.id}
                    onClick={() => { markRead(notif.id); if (notif.actionPath) navigate(notif.actionPath); }}
                    className="flex gap-4 p-4 rounded-2xl cursor-pointer transition-all group hover:scale-[1.005]"
                    style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.08)' }}
                  >
                    <div className="relative shrink-0">
                      {notif.type === 'ai' ? (
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,152,0,0.15)' }}>
                          <Sparkles size={18} style={{ color: '#FF9800' }} />
                        </div>
                      ) : (
                        <img src={notif.avatar} alt="" className="w-10 h-10 rounded-full object-cover opacity-75" />
                      )}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: '#0C1629', border: `2px solid ${color}` }}>
                        <TypeIcon size={10} style={{ color }} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium mb-0.5" style={{ color: '#C8D8F0' }}>{notif.title}</p>
                        <span className="text-xs shrink-0" style={{ color: '#4A6080' }}>{notif.time}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: '#4A6080' }}>{notif.body}</p>
                    </div>
                    <button
                      onClick={e => { e.stopPropagation(); deleteNotif(notif.id); }}
                      className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shrink-0 self-start"
                      style={{ background: 'rgba(244,67,54,0.12)', color: '#F44336' }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}
