const constants = {
  localization: {
    // Default language to be used
    DEFAULT_LANGUAGE: 'en',
    // Async storage key to store app language
    APP_LANGUAGE: 'appLanguage',
    // true -> Use device settings :: false -> use app settings for localization
    USE_DEVICE_LANGUAGE: false
  },
  validationRegex: {
    // Regex format for input validation fields
    username: new RegExp('^[a-zA-Z0-9]{8,20}$'),
    password: new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )
  }
};

export default constants;
