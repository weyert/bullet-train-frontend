module.exports = global.Project = {
    debug: false,
    env: 'prod', // This is used for Sentry tracking
    bulletTrain: process.env.BULLET_TRAIN_API_KEY || '4vfqhypYjcPoGGu8ByrBaj', // This is our Bullet Train API key - Bullet Train runs on Bullet Train!
    api: process.env.BULLET_TRAIN_API_URL || 'https://api.bullet-train.io/api/v1/',
    ga: process.env.GOOGLE_ANALYTICS_KEY || 'UA-120237963-1', // This is our Google Analytics key
    sentry: process.env.SENTRY_APU_URL || 'https://11c8828dc24041b0a875e324b0380769@sentry.io/1320942',
    demoAccount: {
        email: 'kyle+bullet-train@solidstategroup.com',
        password: 'demo_account',
    },
    freshChat: {
        token: process.env.FRESHCAT_TOKEN || '5a71b820-b007-4bc4-86f6-4145411604c2',
        host: process.env.FRESHCAT_HOST_URL || 'https://wchat.freshchat.com',
    },
    chargebee: {
        site: 'bullettrain',
    },
    mixpanel: process.env.MIXPANEL_API_TOKEN || '9448f5be8a5555c380e5dd4b7ac2c345',
    youtubeApi: process.env.YOUTUBE_API_TOKEN || 'AIzaSyCAjMzgz8vbxqReBxkQGcwsda6zAO0L2JE',
    assetUrl: process.env.BULLET_TRAIN_ASSET_URL || 'https://cdn.bullet-train.io', // Location of the static files from build/, should contain a directory called static/
};
