import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'dynamic';
  animated?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      animated = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-bold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-valentine-rose to-valentine-heart text-white hover:from-valentine-heart hover:to-valentine-dark shadow-lg hover:shadow-xl',
      secondary:
        'bg-valentine-light text-valentine-dark hover:bg-valentine-pink border-2 border-valentine-rose',
    };

    const sizeStyles = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-12 py-4 text-lg',
      xl: 'px-16 py-6 text-2xl',
      dynamic: '', // Will be controlled by parent
    };

    const animationStyles = animated ? 'hover:scale-110 active:scale-95' : '';

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          animationStyles,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
