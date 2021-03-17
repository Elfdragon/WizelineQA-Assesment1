const dotenv = require('dotenv')
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.VALID_USER1,
        PASSWORD: process.env.PASSWORD
    },
    LOCKED_OUT_USER:{
        USERNAME: process.env.BLOCKED_USER,
        PASSWORD: process.env.PASSWORD
    },
    PROBLEM_USER:{
        USERNAME: process.env.VALID_USER3,
        PASSWORD: process.env.PASSWORD
    },
    PERFORMANCE_GLITCH_USER:{
        USERNAME: process.env.VALID_USER4,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    },
    USER_INFO:{
        FIRST: "First",
        LAST: "Last",
        ZIP: "12345"
    }
}