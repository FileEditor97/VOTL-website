const tones = Array.from({ length: 10 }).reduce((obj, val, index) => {
    const tone = index == 0 ? "50" : String(index * 100);
    const tones = Array.from({ length: 10 }).reduce((_obj, _val, _index) => {
      const _tone = String(_index) + (_index != 0 ? "0" : "");
      _obj[tone + "/" + _tone] = `var(--${tone}-${_tone})`;
      return _obj;
    }, {});
    obj = {
      ...tones,
      ...obj
    };
    return obj;
}, {});

module.exports = {
    important: true,
    content: [
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    ...tones,
                    900: 'var(--900)',
                    800: 'var(--800)',
                    700: 'var(--700)',
                    600: 'var(--600)',
                    500: 'var(--500)',
                    400: 'var(--400)',
                    300: 'var(--300)',
                    200: 'var(--200)',
                    100: 'var(--100)',
                    50: 'var(--50)',
                }
            },
        }
    }
};