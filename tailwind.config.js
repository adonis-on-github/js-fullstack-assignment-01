module.exports = {
    purge: ["./public/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateRows: {
                'layout': '96px 1fr'
            },
            gridTemplateColumns: {
                'layout': 'minmax(180px, 1fr) repeat(3, 1fr)'
            },
            gridAutoColumns: {
                'layout': '1fr'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}