import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MarketingLayout } from '../features/marketing/components';
import {
  HomePage,
  FeaturesPage,
  HowItWorksPage,
  PricingPage,
  AboutPage,
  ContactPage,
} from '../features/marketing/pages';
import {
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from '../features/auth/pages';
import { AuthGuard } from '../features/auth/components';
import { Dashboard } from '../features/dashboard/pages';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing Routes */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />

        {/* Legacy routes - redirect to new auth paths */}
        <Route path="/sign-in" element={<Navigate to="/auth/signin" replace />} />
        <Route path="/sign-up" element={<Navigate to="/auth/signup" replace />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
