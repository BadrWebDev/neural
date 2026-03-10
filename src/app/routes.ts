import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';

// Lazy load all pages for better code splitting
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const AppLayout = lazy(() => import('./components/AppLayout'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const EditorPage = lazy(() => import('./pages/EditorPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const CollaborationPage = lazy(() => import('./pages/CollaborationPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const NotificationsPage = lazy(() => import('./pages/NotificationsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

export const router = createBrowserRouter([
  { path: '/', Component: LandingPage },
  { path: '/auth', Component: AuthPage },
  {
    path: '/app',
    Component: AppLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: 'editor', Component: EditorPage },
      { path: 'editor/:id', Component: EditorPage },
      { path: 'article/:id', Component: ArticlePage },
      { path: 'collaboration', Component: CollaborationPage },
      { path: 'profile', Component: ProfilePage },
      { path: 'notifications', Component: NotificationsPage },
      { path: 'settings', Component: SettingsPage },
    ],
  },
]);
