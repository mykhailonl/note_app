import { LoginPage } from './pages/LoginPage/LoginPage.tsx';

function App() {
  return (
    <div className="flex h-full">
      <main className="mobile-grid tablet:tablet-grid desktop:desktop-grid gap-x-4 bg-neutral-100">
        <LoginPage />
      </main>
    </div>
  );
}

export default App;
