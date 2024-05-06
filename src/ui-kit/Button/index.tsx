import {cva, cx, type VariantProps} from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'animation-all duration-300 inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-blue-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border border-border bg-tertiary text-tertiary-foreground hover:bg-tertiary/80',
        secondary: 'bg-secondary text-greyed hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'border border-input text-greyed border-1 bg-transparent hover:bg-secondary/80',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'text-sm h-5 rounded-sm px-3 py-2',
        md: 'text-sm h-10 rounded-md px-4 py-2',
        lg: 'text-base h-11 rounded-md px-4 py-2',
        rounded: 'rounded-full w-[40px] h-[40px] text-sm py-0 px-0 border-none'
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, children, ...props}, ref) => {
    return (
      <button className={cx(buttonVariants({variant, size, className}))} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

