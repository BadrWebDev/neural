import logo from "../../assets/cfeba923d48200566fbece8d9db8c4c672f0c30e.png";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = { sm: 28, md: 36, lg: 52 };
  const px = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoImg} alt="NEURAL+" style={{ width: px, height: px }} className="object-contain" />
      {showText && (
        <span
          className="font-black tracking-wide select-none"
          style={{
            fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.2rem' : '1.6rem',
            background: 'linear-gradient(135deg, #1976D2 0%, #00BCD4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
          }}
        >
          NEURAL+
        </span>
      )}
    </div>
  );
}
