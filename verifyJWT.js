const fs = require('fs');
const jwt = require('jsonwebtoken');

// Load the public key
const publicKey = fs.readFileSync('publicRSAKey.pem', 'utf8');

// Your JWT token
const token = fs.readFileSync('generatedToken.txt', 'utf8').trim();

try {
    const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
    console.log('JWT is valid!');
    console.log('Decoded JWT:', decoded);
} catch (err) {
    console.error('JWT verification failed:', err.message);
}
