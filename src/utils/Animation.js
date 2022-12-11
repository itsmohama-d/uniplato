export const linkAnim = {
  hidden: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 0,
    transition: {
      duration: 1,
    },
  },
  show: {
    backgroundColor: 'rgb(173, 242, 251)',
    borderRadius: '2rem',
    transition: {
      duration: 1,
    },
  },
};

export const textAnim = {
  show: {
    opacity: 1,
    y: 0,
    color: '#0096aa',
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    color: '#0096aa',
    transition: {
      duration: 1,
    },
  },
};
export const textAnimLast = {
  show: {
    display: 'flex',
    opacity: 1,
    y: 0,
    color: '#0096aa',
    transition: {
      duration: 1,
    },
  },
  hidden: {
    display: 'none',
    opacity: 0,
    y: 50,
    color: '#0096aa',
    transition: {
      duration: 1,
    },
  },
};
