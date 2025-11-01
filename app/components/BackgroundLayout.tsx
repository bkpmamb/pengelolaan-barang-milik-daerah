// app/components/BackgroundLayout.tsx
interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url(/images/gedung2.jpg)",
      }}
    >
      {/* Gradient Overlay */}
      <div className="min-h-screen bg-linear-to-t from-blue-50/20 via-white/5 to-transparent backdrop-blur-sm">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 max-w-md">{children}</div>
      </div>
    </div>
  );
}
