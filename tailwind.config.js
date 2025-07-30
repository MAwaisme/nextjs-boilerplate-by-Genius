// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ff6600", // orange button etc.
                dark: "#1a1a1a",
                accent: "#5f5fff", // purple/blue accents
                lightGray: "#f5f5f5",
                borderGray: "#e5e7eb",
            },
            fontFamily: {
                sans: ['"Poppins"', "sans-serif"],
            },
            boxShadow: {
                card: "0 4px 20px rgba(0, 0, 0, 0.1)",
            },
        },
    },
    plugins: [],
};
