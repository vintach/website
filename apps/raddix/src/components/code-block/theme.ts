import type { PrismTheme } from 'prism-react-renderer';

export const blameTheme: PrismTheme = {
  plain: {
    color: '#e5c07b',
    backgroundColor: 'transparent'
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(189, 147, 249)'
      }
    },
    {
      types: ['inserted', 'function', 'maybe-class-name'],
      style: {
        color: 'rgb(97, 175, 239)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)'
      }
    },
    {
      types: ['punctuation', 'signo'],
      style: {
        color: '#999'
      }
    },
    {
      types: ['arrow'],
      style: {
        color: 'rgb(189, 147, 249)'
      }
    },
    {
      types: ['string', 'char', 'tag', 'selector', 'attr-value'],
      style: {
        color: 'rgb(152, 195, 121)'
      }
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: 'rgb(198, 120, 221)'
      }
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(98, 114, 164)'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: '#d19a66'
      }
    },
    {
      types: ['tag', 'parameter', 'imports'],
      style: {
        color: 'rgb(224, 108, 117)'
      }
    },
    {
      types: [
        'class',
        'selector',
        'attribute',
        'attr-name',
        'number',
        'hexcode',
        'color'
      ],
      style: {
        color: '#d19a66'
      }
    },
    {
      types: ['unit'],
      style: {
        color: 'rgb(224, 108, 117)'
      }
    },
    {
      types: ['property'],
      style: {
        color: '#56b6c2'
      }
    },
    {
      types: ['plain-text'],
      style: {
        color: '#ddd'
      }
    }
  ]
};
