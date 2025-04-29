import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route('/login', 'pages/LoginPage/LoginPage.tsx'),
  route('/signup', 'pages/SignUpPage/SignUpPage.tsx'),
  route('/forgot', 'pages/ForgotPasswordPage/ForgotPasswordPage.tsx'),
  route('/reset', 'pages/ResetPasswordPage/ResetPasswordPage.tsx'),
  route('*', './catchall.tsx'),
] satisfies RouteConfig;
