import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { config } from './config';


const app = express();

(<any>mongoose).Promise = global.Promise;

mongoose.connect(config.MONGOURI, { useMongoClient: true }, (err) => {
    if (err) {
        console.error(err);
        process.exit();
    }
    console.log('MongoDB Connection Established');
});

app.set('port', config.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger(process.env.NODE_ENV || 'dev'));

// app.use('/user', UserRoute);
// app.use('/secret', SecretRoute);
// app.use('/message', MessageRoute);

app.listen(app.get('port'), () => {
    console.log(`Stickynotes Server is running at http://localhost: ${app.get('port')} 
                 in ${app.get('env')} mode`);
    console.log('Press CTRL-C to stop\n');
});

export default app;