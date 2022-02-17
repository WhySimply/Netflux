module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: {
                "70v": "70vh"
            },
            maxHeight: {
                '80p': '80%',
            },
            colors: {
                'primary': 'var(--primary)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
