import React from 'react';

const SectionContext = React.createContext([
  {
    id: '01',
    src: './images/modeling.jpg',
    title: 'Modeling',
    path: '/modeling'
  },
  {
    id: '02',
    src: './images/hero.jpg',
    title: 'Acting',
    path: '/acting'
  },
  {
    id: '03',
    src: './images/hero1.jpg',
    title: 'Demo reels',
    path: '/demo-reels'
  },
  {
    id: '04',
    src: './images/hero2.jpg',
    title: 'Contact',
    path: '/contact'
  }
]);

export default SectionContext;
