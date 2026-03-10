import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Bell, Search, Command } from 'lucide-react';
import { Sidebar } from './Sidebar';

export default function AppLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: '#060D1A', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center gap-4 px-6 h-16 shrink-0"
          style={{
            background: '#060D1A',
            borderBottom: '1px solid rgba(100,150,255,0.1)',
          }}
        >
          {/* Search */}
          <div className="flex-1 max-w-lg relative">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.12)' }}
            >
              <Search size={15} style={{ color: '#8AA3C8' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, users..."
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: '#E8F0FE' }}
              />
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg"
                style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.12)' }}>
                <Command size={11} style={{ color: '#8AA3C8' }} />
                <span className="text-xs" style={{ color: '#8AA3C8' }}>K</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* AI status indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{ background: 'rgba(0,188,212,0.1)', border: '1px solid rgba(0,188,212,0.2)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: '#00BCD4' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: '#00BCD4' }}></span>
              </span>
              <span className="text-xs font-medium" style={{ color: '#00BCD4' }}>AI Online</span>
            </div>

            {/* Notifications */}
            <button
              onClick={() => navigate('/app/notifications')}
              className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.12)' }}
            >
              <Bell size={17} style={{ color: '#8AA3C8' }} />
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full"
                style={{ background: '#1565C0', border: '1.5px solid #060D1A' }}
              />
            </button>

            {/* Avatar */}
            <button onClick={() => navigate('/app/profile')}>
              <img
                src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face"
                alt="User"
                className="w-9 h-9 rounded-xl object-cover"
                style={{ border: '2px solid rgba(21,101,192,0.4)' }}
              />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto" style={{ background: '#060D1A' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
