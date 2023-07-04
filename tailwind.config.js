/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'very-dark-blue': '#1b1D23',
            'dark-gray': '#60636D',
            'medium-gray': '#7d828f',
            'light-gray': '#c8ccd8',
            'very-light-gray': '#eeeff4',
            red: '#df5656',
        },
    },
    plugins: [],
}
