const testConfig = {
    MONGOURI: 'mongodb://127.0.0.1:27017/StickynotesDB_test',
    PORT: 3000,
};

const devConfig = {
    MONGOURI: 'mongodb://127.0.0.1:27017/StickynotesDB_dev',
    PORT: 3000,
};

const prodConfig = {
    MONGOURI: 'mongodb://127.0.0.1:27017/StickynotesDB',
    PORT: 80,
};


let exportConfig = {
    MONGOURI: '',
    PORT: 0,
};

switch (process.env.NODE_ENV) {
    case 'prod': {
        exportConfig = prodConfig;
        break;
    }

    case 'dev': {
        exportConfig = devConfig;
        break;
    }

    case 'test': {
        exportConfig = testConfig;
        break;
    }

    default: {
        exportConfig = devConfig;
    }
}

export { exportConfig as config };
