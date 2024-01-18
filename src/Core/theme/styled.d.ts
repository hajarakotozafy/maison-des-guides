import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        size: (value: number) => number
        fonts: {
            main: string,
            extra: string,
            brand: string,
        }
        maxWidth: number,
        colors: {
            neutralColor: string,
            brandColor: string, 
            lightBrandColor: string, 
            accentColor1: string,
            accentColor2: string,
            blackTextColor: string,
        }
    }
}