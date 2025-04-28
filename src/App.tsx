import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <div className="flex h-full">
      <main className="mobile-grid tablet:tablet-grid desktop:desktop-grid gap-x-4 bg-neutral-100">
        <SignUpPage />
      </main>
    </div>
  );
}

export default App;
