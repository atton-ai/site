import logo from './logo.png';

export function Logo({ className = "", opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <div
      className={`flex items-center ${className}`}
      style={{ opacity }}
    >
      <img src={logo} alt="ATTON AI" className="h-10 w-auto object-contain" />
    </div>
  );
}