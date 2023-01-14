const setDarkTheme = (title = '', color = 'black', tint = 'white') => ({
  topBar: {
    title: {
      text: title,
      color: tint,
    },
    background: {
      color,
    },
    backButton: {
      color: tint,
    },
  },
  statusBar: {
    backgroundColor: color,
    style: 'light',
  },
});

const setLightheme = (title = '') => ({
  topBar: {
    title: {
      text: title,
      color: 'black',
    },
    background: {
      color: 'white',
    },
    backButton: {
      color: 'black',
    },
  },
  statusBar: {
    backgroundColor: 'white',
    style: 'dark',
  },
});

export {setDarkTheme, setLightheme};
