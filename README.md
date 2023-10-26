# JWT Utility Scripts

This repository contains utility scripts to generate and verify JSON Web Tokens (JWT) using RSA keys.

## Overview

- `generateJWT.js`: Generates a JWT using a given payload and a private RSA key.
- `verifyJWT.js`: Verifies the validity of a JWT using a public RSA key.
- `createKey.js`: Creates V3 keystore key file for use in EthSigner

## Prerequisites

- Node.js and npm installed

## Setup

1. Install the required npm packages:

```bash
npm install
```

2. Generate the private and public RSA keys:

```bash
openssl genrsa -out privateRSAKey.pem 2048
openssl rsa -pubout -in privateRSAKey.pem -pubout -out publicRSAKey.pem
```

## Usage

### Generating a JWT

1. Modify the payload in `generateJWT.js` as needed.
2. Run the script:

```bash
node generateJWT.js
```

The generated JWT will be saved to `generatedToken.txt` and also printed to the console.

### Verifying a JWT

1. Ensure you have a JWT in `generatedToken.txt` (or modify the script to point to the correct file).
2. Run the script:

```bash
node verifyJWT.js
```

The script will verify the JWT using the public key. If the JWT is valid, the decoded payload will be printed to the console. If the JWT is invalid or has been tampered with, an error message will be displayed.


### V3KeyStore for EthSigner

1. Create a text file containing the password for the V3 keystore key file to be created (for example, `passwordFile.txt`). 
2. Modify the `<AccountPrivateKey>` with the private key of the wallet and `<Password>` with the password you just saved inside `passwordFile.txt` 
3. Modify the JSON-RPC endpoint as needed.
4. Run the script: 

```bash
node createKey.js
```

*Note*: I used these scripts for a project and the day I finished I found out the EthSigner is no longer in development and is being replaced by [Web3Signer](https://docs.web3signer.consensys.net/). Also you should not use V3 keystore key files in production, this was ONLY for run a local development test, both EthSigner and Web3Signer have options to store keys externally in Azure and HashCorp Vault. 