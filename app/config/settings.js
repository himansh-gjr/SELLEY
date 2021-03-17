const settings = {
  dev: {
    apiUrl: "http://192.168.0.105:9000/api",
  },
};

const getCurrentSettings = () => {
  return settings.dev;
};

export default getCurrentSettings();
