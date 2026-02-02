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

        {/* Auth Routes - Placeholder for Phase 2 */}
        <Route path="/sign-in" element={<ComingSoon page="Sign In" />} />
        <Route path="/sign-up" element={<ComingSoon page="Sign Up" />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Temporary placeholder component for auth pages
function ComingSoon({ page }: { page: string }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {page} - Coming in Phase 2
      </h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        Authentication will be implemented in the next phase
      </p>
      <a href="/" style={{ color: 'var(--brand-primary)', marginTop: '1rem' }}>
        ← Back to Home
      </a>
    </div>
  );
}
