import { AppRouter } from './AppRouter';
import { AuthProvider } from '../common/context/AuthContext';
import '../common/styles/reset.css';
import '../common/styles/theme.css';
import '../common/styles/globals.css';

export function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
