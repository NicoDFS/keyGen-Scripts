const fs = require('fs');
const jwt = require('jsonwebtoken');

// Load the private RSA key
const privateKey = fs.readFileSync('privateRSAKey.pem', 'utf8');

// Define the payload for the JWT 
// https://besu.hyperledger.org/public-networks/how-to/use-besu-api/authenticate#2-create-the-jwt
const payload = {
    "permissions": ["*:*"],
    "exp": 1729857600000 // October 25, 2024 12:00:00 PM 
};

// Sign the JWT using RS256 (RSA SHA-256)
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

console.log('Generated JWT:', token);

// Save the JWT to a file
fs.writeFileSync('generatedToken.txt', token, 'utf8');