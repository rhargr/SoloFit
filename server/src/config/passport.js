import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import Table from '../utils/table';
import { encode, decode } from '../utils/tokens';

let usersTable = new Table('User');
let tokensTable = new Table('Token');

function configurePassport(app) {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                session: false,
            },
            async (email, hash, done) => {
                try {
                    // array destructuring. find() will return an array of results.
                    // destructuring the first (and hopefully only) result into the user variable
                    console.log('email trying to login', email);
                    let [user] = await usersTable.find({ email });
                    console.log('user', user);
                    if (user && user.hash && user.hash === hash) {
                        let idObj = await tokensTable.insert({
                            user_id: user.id,
                        });
                        let token = encode(idObj.id);
                        return done(null, { token });
                    } else {
                        return done(null, false, {
                            message: 'Invalid credentials',
                        });
                    }
                } catch (err) {
                    return done(err);
                }
            },
        ),
    );

    passport.use(
        new BearerStrategy(async (token, done) => {
            console.log('');
            let tokenId = decode(token);
            if (!tokenId) {
                return done(null, false, { message: 'Invalid token' });
            }
            try {
                console.log(tokenId);
                let tokenRecord = await tokensTable.getOne(tokenId);
                console.log('token record', tokenRecord);
                let user = await usersTable.getOne(tokenRecord.user_id);
                if (user) {
                    delete user.hash;
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid token' });
                }
            } catch (err) {
                return done(err);
            }
        }),
    );

    app.use(passport.initialize());
}

export default configurePassport;
