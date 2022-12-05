import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
    media: {
        // ブレークポイントは、Bootstrap参照。(https://getbootstrap.jp/docs/5.0/layout/breakpoints/)
        phone: '(min-width: 576px)',
        tablet: '(min-width: 768px)',
        pc: '(min-width: 992px)',
    },
    theme: {
        colors: {
            background: '#2F2F2F',
            menuButton: '#636DFF',
            color1: '#000000',
            color: '#FFFFFF'
        }
    }
});