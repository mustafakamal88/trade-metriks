# Phase 2 Quick Start Guide

## 🚀 Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
Create `.env.local` in the project root:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set Up Supabase Database
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your Project URL and Anon Key to `.env.local`
3. Go to SQL Editor in Supabase
4. Open the `SUPABASE_MIGRATION.sql` file from the project
5. Copy and paste the entire SQL into Supabase SQL Editor
6. Click "Run" to create the database schema

### 4. Start Development
```bash
npm run dev
```

## 📋 Key Routes

| Route | Purpose | Requires Login |
|-------|---------|---|
| `/` | Marketing home | No |
| `/auth/signin` | Sign in page | No |
| `/auth/signup` | Sign up page | No |
| `/auth/forgot-password` | Forgot password | No |
| `/auth/reset-password` | Reset password (with token) | No |
| `/dashboard` | User dashboard | **Yes** |

## 🎯 Testing the Auth Flow

### Sign Up Test
```
1. Go to http://localhost:5173/auth/signup
2. Enter:
   - Full Name: "John Doe"
   - Email: "john@example.com"
   - Password: "TestPass123" (must have 8+ chars, uppercase, number)
   - Confirm Password: Same as above
3. Click "Create Account"
4. You should see success message and redirect to signin
5. Check Supabase: new user should appear in Authentication > Users
6. Check database: new profile should appear in profiles table
```

### Sign In Test
```
1. Go to http://localhost:5173/auth/signin
2. Enter credentials from sign up above
3. Check "Remember Me" (optional)
4. Click "Sign In"
5. Should redirect to dashboard
6. Header should show profile dropdown with your name
```

### Protected Route Test
```
1. Go to http://localhost:5173/dashboard (while signed out)
2. Should redirect to /auth/signin
3. Sign in
4. Now /dashboard should be accessible
5. Sign out (click header dropdown)
6. Try accessing /dashboard again - should redirect to signin
```

### Password Reset Test
```
1. Go to /auth/forgot-password
2. Enter your email
3. Check your email inbox for reset link (may be in Supabase logs if email not configured)
4. Click link or manually go to /auth/reset-password with the token
5. Enter new password
6. Sign in with new password
```

## 📁 Project Structure

```
src/
├── common/                      # Shared utilities
│   ├── context/AuthContext.tsx  # Global auth state
│   ├── lib/supabase.ts          # Supabase client
│   ├── types/auth.ts            # Type definitions
│   └── components/
│       ├── Header.tsx           # Updated with profile dropdown
│       ├── LoadingSpinner.tsx   # Loading indicator
│       └── ...
├── features/
│   ├── auth/                    # Auth feature slice
│   │   ├── components/          # Form components
│   │   │   ├── AuthLayout.tsx   # Shared layout
│   │   │   ├── SignInForm.tsx   # Sign in form
│   │   │   ├── SignUpForm.tsx   # Sign up form
│   │   │   ├── ForgotPasswordForm.tsx
│   │   │   ├── AuthGuard.tsx    # Protected route wrapper
│   │   │   └── index.ts
│   │   └── pages/               # Page components
│   │       ├── SignInPage.tsx
│   │       ├── SignUpPage.tsx
│   │       ├── ForgotPasswordPage.tsx
│   │       ├── ResetPasswordPage.tsx
│   │       └── index.ts
│   ├── dashboard/               # Dashboard feature
│   │   └── pages/
│   │       ├── Dashboard.tsx    # User dashboard
│   │       └── index.ts
│   └── marketing/               # Existing marketing pages
├── app/
│   ├── App.tsx                  # Wrapped with AuthProvider
│   └── AppRouter.tsx            # All routes configured
└── main.tsx
```

## 🔐 Security Features

- ✅ Row Level Security on database (users can only access their own data)
- ✅ Password validation (minimum 8 chars, uppercase, number)
- ✅ Session management with auto-recovery
- ✅ Protected routes prevent unauthorized access
- ✅ Error handling without exposing sensitive info
- ✅ Environment variables not hardcoded

## 🎨 What Was Built

- ✅ Complete authentication system
- ✅ Sign up with email/password
- ✅ Sign in with remember me
- ✅ Password reset via email
- ✅ Protected routes with loading state
- ✅ User profile management
- ✅ Header with profile dropdown
- ✅ Dashboard placeholder
- ✅ Form validation
- ✅ Error handling
- ✅ Responsive design
- ✅ Dark theme UI
- ✅ TypeScript type safety

## 🐛 Troubleshooting

### "Cannot connect to Supabase"
- Check `.env.local` has correct VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
- Restart dev server after updating .env.local
- Verify Supabase project is active (not paused)

### "Session not persisting"
- Check browser local storage is enabled
- Clear browser cache and reload
- Verify Supabase session settings

### "Password reset not working"
- Supabase email provider needs configuration
- Check Supabase project settings for email settings
- For development, check Supabase logs for the reset link

### Build fails
- Run `npm install` to ensure all dependencies installed
- Run `npm run lint` to check for code issues
- Check TypeScript with `npx tsc --noEmit`

## 📚 Key Files to Know

### Authentication Context
- **File**: `src/common/context/AuthContext.tsx`
- **Use**: Access auth state with `useAuth()` hook
- **Methods**: `signIn()`, `signUp()`, `signOut()`, `resetPassword()`
- **State**: `user`, `profile`, `loading`, `error`

### Supabase Client
- **File**: `src/common/lib/supabase.ts`
- **Use**: Direct Supabase API calls
- **Note**: Prefer using AuthContext methods instead

### Protected Routes
- **File**: `src/features/auth/components/AuthGuard.tsx`
- **Use**: Wrap components to protect from unauthorized access
- **Example**: `<AuthGuard><Dashboard /></AuthGuard>`

### Router Configuration
- **File**: `src/app/AppRouter.tsx`
- **View**: All routes and their configuration
- **Add routes**: Add new routes here

## 🚀 Deploy to Production

### Before deploying:
1. Test all auth flows locally
2. Verify `.env.local` environment variables
3. Run `npm run build` and check for errors
4. Run `npm run lint` to check code quality

### Build for production:
```bash
npm run build
npm run preview  # Test production build locally
```

### Deploy:
Push to your hosting provider (Vercel, Netlify, etc.)
- Set environment variables in production settings
- Deploy builds automatically from main branch

## 📖 Documentation Files

Read these for more details:
- `PHASE_2_IMPLEMENTATION.md` - Complete implementation guide
- `PHASE_2_SUMMARY.md` - What was built
- `PHASE_2_CHECKLIST.md` - Everything completed
- `.env.example` - Environment variable template
- `SUPABASE_MIGRATION.sql` - Database schema

## 💡 Tips

- Use `npm run dev` for development (hot reload)
- Use `npm run lint` to check for code issues
- Use browser DevTools to inspect auth state
- Check Supabase dashboard to verify data
- Form validation happens before server submission
- Remember me saves email to localStorage only

## ✨ What's Next

Phase 3 will include:
- Profile editing page
- Avatar upload
- Email verification
- Account settings
- Trading journal features
- Dashboard statistics
- And more!

---

**Ready to test?** Follow the Setup section above and start signing up!
