import 'dotenv/config';

export default ({ config }) => {
  // Common configuration
  const commonConfig = {
    ...config,
    extra: {
      apiUrl: process.env.API_URL || 'https://api.example.com',
      enableAnalytics: process.env.ENABLE_ANALYTICS === 'true',
    },
  };

  // Environment-specific configuration
  if (process.env.APP_ENV === 'production') {
    return {
      ...commonConfig,
      android: {
        ...commonConfig.android,
      },
      ios: {
        ...commonConfig.ios,
      },
    };
  } else if (process.env.APP_ENV === 'staging') {
    return {
      ...commonConfig,
      name: `${commonConfig.name} (Staging)`,
      android: {
        ...commonConfig.android,
        package: `${commonConfig.android.package}.staging`,
      },
      ios: {
        ...commonConfig.ios,
        bundleIdentifier: `${commonConfig.ios.bundleIdentifier}.staging`,
      },
    };
  }

  // Default to development
  return {
    ...commonConfig,
    name: `${commonConfig.name} (Dev)`,
    android: {
      ...commonConfig.android,
      package: `${commonConfig.android.package}.dev`,
    },
    ios: {
      ...commonConfig.ios,
      bundleIdentifier: `${commonConfig.ios.bundleIdentifier}.dev`,
    },
  };
};
