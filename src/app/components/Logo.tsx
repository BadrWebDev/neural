import { Sparkles } from 'lucide-react';

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
      <div 
        style={{ 
          width: px, 
          height: px,
          background: 'linear-gradient(135deg, #1976D2 0%, #00BCD4 100%)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Sparkles size={px * 0.6} color="white" strokeWidth={2.5} />
      </div>
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
