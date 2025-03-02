/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  chart: {
			1: "hsl(var(--chart-1))",
			2: "hsl(var(--chart-2))",
			3: "hsl(var(--chart-3))",
			4: "hsl(var(--chart-4))",
			5: "hsl(var(--chart-5))",
		  },
		},
		perspective: {
		  'none': 'none',
		  'default': '1000px',
		},
		// Add keyframes for flip animation
		keyframes: {
		  flip: {
			"0%": { transform: "rotateY(0deg)" },
			"100%": { transform: "rotateY(180deg)" },
		  },
		},
		// Add animation utilities
		animation: {
		  flip: "flip 0.5s ease-in-out",
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  function ({ addUtilities }) {
		const newUtilities = {
		  '.preserve-3d': {
			transformStyle: 'preserve-3d',
		  },
		  '.backface-hidden': {
			backfaceVisibility: 'hidden',
		  },
		  '.my-rotate-y-180': {
			transform: 'rotateY(180deg)',
		  },
		  '.perspective': {
			perspective: '1000px',
		  },
		}
		addUtilities(newUtilities)
	  }
	],
  };