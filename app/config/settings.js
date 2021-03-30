const settings = {
  dev: {
    apiUrl: "", //"http://ipAddress:9000/api",
  },
};

const getCurrentSettings = () => {
  return settings.dev;
};

export default getCurrentSettings();
