/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  ENV["revision-data"] = {
    type: 'version-commit'
  }

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      bucket: 'draft-app',
      region: 'eu-central-1'
    };

     ENV['s3-index'] = {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      bucket: 'draft-app',
      region: 'eu-central-1'
    };
  }
  return ENV;
};
