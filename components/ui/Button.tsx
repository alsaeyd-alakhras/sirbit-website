import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  icon,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 text-base';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#00AEEF] to-[#7B61FF] text-white hover:shadow-lg hover:shadow-[#00AEEF]/30 dark:hover:shadow-[#7B61FF]/30 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 border-[#00AEEF] text-[#00AEEF] dark:border-[#7B61FF] dark:text-[#7B61FF] bg-transparent hover:bg-[#00AEEF]/10 dark:hover:bg-[#7B61FF]/10 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const MotionButton = motion.button;
  const MotionLink = motion(Link);

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {content}
    </MotionButton>
  );
};

export default Button;

