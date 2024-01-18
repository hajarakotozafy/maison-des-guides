import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
    size: (value: number, sizeMultiplicator = 8) => {
        return value * sizeMultiplicator
    },
    fonts: {
        main: 'Plus Jakarta Sans',
        extra: 'Life Savers',
        brand: 'Mea Culpa',
    },
    maxWidth: 1140,
    colors: {
        neutralColor: '#FFFFFF',
        brandColor: '#120A48',
        lightBrandColor: '#03B3FE',
        accentColor1: '#3BB642',
        accentColor2: '#FF4D50',
        blackTextColor: '#86858B',
    }
}
 
export default Theme;