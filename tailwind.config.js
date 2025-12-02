/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: '#8b5cf6',
        success: '#10b981',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--text)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-hover)',
              },
            },
          },
        },
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(15, 23, 42, 0.06)',
        'md': '0 4px 12px rgba(15, 23, 42, 0.1)',
        'lg': '0 12px 32px rgba(15, 23, 42, 0.12)',
        'xl': '0 20px 48px rgba(15, 23, 42, 0.14)',
        'focus': '0 0 0 4px rgba(59, 130, 246, 0.1)',
      },
      animation: {
        'fadeInScale': 'fadeInScale 0.5s ease-out',
        'slideUp': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeInScale: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl': '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
