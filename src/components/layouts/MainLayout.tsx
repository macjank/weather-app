interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-screen p-4 bg-gradient-to-r from-bgGradient1 via-bgGradient2 to-bgGradient1">
      <div className="max-w-[45rem] mx-auto">{children}</div>
    </main>
  );
};

export default MainLayout;
