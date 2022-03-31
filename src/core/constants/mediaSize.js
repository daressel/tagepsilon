const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '524px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1980px',
};

export default {
  mobileS: {
    min: `(min-width: ${size.mobileS})`,
    max: `(max-width: ${size.mobileS})`,
  },
  mobileM: {
    min: `(min-width: ${size.mobileM})`,
    max: `(max-width: ${size.mobileM})`,
  },
  mobileL: {
    min: `(min-width: ${size.mobileL})`,
    max: `(max-width: ${size.mobileL})`,
  },
  tablet: {
    min: `(min-width: ${size.tablet})`,
    max: `(max-width: ${size.tablet})`,
  },
  laptop: {
    min: `(min-width: ${size.laptop})`,
    max: `(max-width: ${size.laptop})`,
  },
  laptopL: {
    min: `(min-width: ${size.laptopL})`,
    max: `(max-width: ${size.laptopL})`,
  },
  desktop: {
    min: `(min-width: ${size.desktop})`,
    max: `(max-width: ${size.desktop})`,
  },
};
