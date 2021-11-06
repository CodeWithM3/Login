import express, {json} from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import usersRouter from './routes/users-routes.js';
import authRouter from './routes/auth-routes.js';
import passport from 'passport';
import GoogleStrategy from './routes/google.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express ();
const PORT = process.env.PORT || 5000;
const corsOption = {credentials: true, origin:process.env.URL ||'*'};
app.use(cors(corsOption));
app.use(json());
app.use(cookieParser());

app.use('/', express.static(join(__dirname, 'public')));
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/google', GoogleStrategy);

app.get('/login', (req,res) =>{
    res.send('<a href ="/login/google">Authenticate with Google</a>');

}); 
app.get('/login/google', passport.authenticate('google', { scope: ['email','profile'] }));

app.get('/protected', (req, res)=>{
    res.send('Hello');
});


app.listen(PORT, ()=>console.log(`server is up and running on  ${PORT}`))