import { type RouteConfig, route, layout } from '@react-router/dev/routes';

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  layout('layouts/HomePageLayout.tsx', [
    route('/', 'pages/HomePage/HomePage.tsx'),
    route('notes/:noteId', 'pages/NotePage/NotePage.tsx'),
  ]),

  route('/login', 'pages/LoginPage/LoginPage.tsx'),
  route('/signup', 'pages/SignUpPage/SignUpPage.tsx'),
  route('/forgot', 'pages/ForgotPasswordPage/ForgotPasswordPage.tsx'),
  route('/reset', 'pages/ResetPasswordPage/ResetPasswordPage.tsx'),
  route('*', './catchall.tsx'),
] satisfies RouteConfig;
