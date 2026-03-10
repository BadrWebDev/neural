import { createBrowserRouter } from 'react-router';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AppLayout from './components/AppLayout';
import DashboardPage from './pages/DashboardPage';
import EditorPage from './pages/EditorPage';
import ArticlePage from './pages/ArticlePage';
import CollaborationPage from './pages/CollaborationPage';
import ProfilePage from './pages/ProfilePage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

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
