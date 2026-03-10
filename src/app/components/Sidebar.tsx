import { useNavigate, useLocation } from 'react-router';
import {
  LayoutDashboard,
  FileText,
  Compass,
  Sparkles,
  GitMerge,
  Bell,
  User,
  Settings,
  Plus,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import { Logo } from './Logo';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/app' },
  { icon: FileText, label: 'My Articles', path: '/app/editor' },
  { icon: Compass, label: 'Explore', path: '/app/article/1' },
  { icon: GitMerge, label: 'Collaboration', path: '/app/collaboration' },
  { icon: Bell, label: 'Notifications', path: '/app/notifications' },
];

const bottomItems = [
  { icon: User, label: 'Profile', path: '/app/profile' },
  { icon: Settings, label: 'Settings', path: '/app/settings' },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/app') return location.pathname === '/app';
    return location.pathname.startsWith(path);
  };

  return (
    <aside
      className="flex flex-col h-full relative transition-all duration-300"
      style={{
        width: collapsed ? 64 : 240,
        background: '#0C1629',
        borderRight: '1px solid rgba(100,150,255,0.1)',
      }}
    >
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 z-10 flex items-center justify-center w-6 h-6 rounded-full transition-colors"
        style={{ background: '#1565C0', border: '2px solid #060D1A' }}
      >
        {collapsed ? (
          <ChevronRight size={12} className="text-white" />
        ) : (
          <ChevronLeft size={12} className="text-white" />
        )}
      </button>

      {/* Logo */}
      <div
        className="flex items-center px-4 h-16 shrink-0 overflow-hidden"
        style={{ borderBottom: '1px solid rgba(100,150,255,0.1)' }}
      >
        {collapsed ? (
          <Logo size="sm" showText={false} />
        ) : (
          <Logo size="sm" showText={true} />
        )}
      </div>

      {/* New Article button */}
      <div className="px-3 py-4">
        <button
          onClick={() => navigate('/app/editor')}
          className="flex items-center gap-2 w-full rounded-xl transition-all duration-200 font-medium text-white"
          style={{
            padding: collapsed ? '10px' : '10px 14px',
            background: 'linear-gradient(135deg, #1565C0 0%, #0288D1 100%)',
            justifyContent: collapsed ? 'center' : 'flex-start',
            boxShadow: '0 4px 16px rgba(21,101,192,0.3)',
          }}
        >
          <Plus size={16} />
          {!collapsed && <span>New Article</span>}
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = isActive(path);
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex items-center gap-3 w-full rounded-xl transition-all duration-200 group"
              style={{
                padding: collapsed ? '10px 14px' : '10px 14px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                background: active
                  ? 'rgba(21,101,192,0.2)'
                  : 'transparent',
                color: active ? '#60A5FA' : '#8AA3C8',
                borderLeft: active ? '2px solid #1565C0' : '2px solid transparent',
              }}
              title={collapsed ? label : undefined}
            >
              <Icon size={18} style={{ flexShrink: 0 }} />
              {!collapsed && (
                <span className="text-sm whitespace-nowrap">{label}</span>
              )}
              {!collapsed && label === 'Notifications' && (
                <span
                  className="ml-auto flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-white"
                  style={{ background: '#1565C0', fontSize: '10px' }}
                >
                  5
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="mx-4 my-2" style={{ borderTop: '1px solid rgba(100,150,255,0.1)' }} />

      {/* Bottom nav */}
      <nav className="px-2 pb-2 space-y-1">
        {bottomItems.map(({ icon: Icon, label, path }) => {
          const active = isActive(path);
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex items-center gap-3 w-full rounded-xl transition-all duration-200"
              style={{
                padding: '10px 14px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                background: active ? 'rgba(21,101,192,0.2)' : 'transparent',
                color: active ? '#60A5FA' : '#8AA3C8',
                borderLeft: active ? '2px solid #1565C0' : '2px solid transparent',
              }}
              title={collapsed ? label : undefined}
            >
              <Icon size={18} />
              {!collapsed && <span className="text-sm whitespace-nowrap">{label}</span>}
            </button>
          );
        })}
      </nav>

      {/* User info */}
      <div
        className="px-3 py-3 mx-2 mb-3 rounded-xl"
        style={{ background: 'rgba(100,150,255,0.06)', border: '1px solid rgba(100,150,255,0.1)' }}
      >
        {collapsed ? (
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate font-medium">Mohamed Nour</p>
              <p className="text-xs truncate" style={{ color: '#8AA3C8' }}>@m.zidani</p>
            </div>
            <button className="shrink-0" style={{ color: '#8AA3C8' }}>
              <LogOut size={14} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
