import { type RouteConfig, route, layout } from '@react-router/dev/routes';

export default [
  layout('layouts/HomePageLayout.tsx', [
    layout('pages/HomePage/HomePage.tsx', [
      route('/', 'pages/AllNotesPage/AllNotesPage.tsx'),
      route('/search', 'pages/SearchPage/SearchPage.tsx'),
      route('/tags', 'pages/TagsPage/TagsPage.tsx'),
    ]),
    route('notes/:noteId', 'pages/NotePage/NotePage.tsx'),
  ]),

  layout('layouts/SettingsPageLayout.tsx', [
    route('/settings', 'pages/SettingsPage/SettingsPage.tsx'),
    route('/settings/change-password', 'pages/ChangePasswordPage/ChangePasswordPage.tsx'),
    route('/settings/:themeType', 'pages/ThemePage/ThemePage.tsx'),
  ]),

  route('/login', 'pages/LoginPage/LoginPage.tsx'),
  route('/signup', 'pages/SignUpPage/SignUpPage.tsx'),
  route('/forgot', 'pages/ForgotPasswordPage/ForgotPasswordPage.tsx'),
  route('/reset', 'pages/ResetPasswordPage/ResetPasswordPage.tsx'),
  route('*', './catchall.tsx'),
] satisfies RouteConfig;
