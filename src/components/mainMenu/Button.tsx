import React from "react";
import clsx from "clsx";
import { motion } from "motion/react";

const hoverSound = new Audio("/assets/sounds/Button.wav");
hoverSound.volume = 0.5;


interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "empty" | "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

const variantStyles = {
    empty: "",
    primary:
        "hover:shadow-[0_0_18px_rgba(255,0,120,0.7)] bg-gradient-to-br from-pink-600 to-red-700 text-white shadow-[0_0_10px_rgba(255,0,80,0.5)]",
    secondary:
        "bg-gray-700 text-gray-100 shadow-[0_0_10px_rgba(255,255,255,0.25)]",
    danger:
        "bg-gradient-to-br from-red-800 to-red-900 text-red-100 shadow-[0_0_10px_rgba(255,0,0,0.5)]",
};

const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-lg",
    lg: "px-8 py-4 text-2xl",
};

export default function Button({
    children,
    onClick,
    className,
    variant = "primary",
    size = "md",
    disabled = false,
}: ButtonProps) {
    return (
        <motion.button
            onClick={disabled ? undefined : onClick}
            whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 250, damping: 12 },
            }}
            whileTap={{
                scale: 0.94,
                transition: { type: "spring", stiffness: 300, damping: 14 },
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 120, damping: 12 }
            }}
            exit={{
                scale: 0.8,
                opacity: 0,
                transition: { duration: 0.2 }
            }}
            className={clsx(
                "game pointer-events-auto select-none font-bold rounded-lg",
                "transition-all duration-150 ease-out",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
            onMouseEnter={() => hoverSound.play()}
        >
            {children}
        </motion.button>
    );
}
