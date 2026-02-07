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
import { AppShell } from './layouts/AppShell/AppShell';
import { AppSectionPage } from './pages/AppSectionPage';

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

        <Route path="/login" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Protected Routes */}
        <Route
          path="/app"
          element={
            <AuthGuard>
              <AppShell />
            </AuthGuard>
          }
        >
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<AppSectionPage title="Overview" />} />
          <Route path="journal" element={<AppSectionPage title="Trades" />} />
          <Route path="journal/tags" element={<AppSectionPage title="Tags" />} />
          <Route path="analytics/overview" element={<AppSectionPage title="Analytics Overview" />} />
          <Route path="analytics/performance" element={<AppSectionPage title="Performance" />} />
          <Route path="analytics/risk" element={<AppSectionPage title="Risk" />} />
          <Route path="analytics/calendar" element={<AppSectionPage title="Calendar" />} />
          <Route path="brokers/accounts" element={<AppSectionPage title="Broker Accounts" />} />
          <Route path="brokers/sync-jobs" element={<AppSectionPage title="Sync Jobs" />} />
          <Route path="brokers/settings" element={<AppSectionPage title="Broker Settings" />} />
          <Route path="settings/profile" element={<AppSectionPage title="Profile" />} />
          <Route path="settings/appearance" element={<AppSectionPage title="Appearance" />} />
          <Route path="settings/billing" element={<AppSectionPage title="Billing" />} />
        </Route>

        <Route path="/dashboard" element={<Navigate to="/app/overview" replace />} />

        {/* Legacy routes - redirect to new auth paths */}
        <Route path="/sign-in" element={<Navigate to="/auth/signin" replace />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
