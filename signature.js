const crypto = require('crypto')
const fs = require('fs')

// Create some sample data that we want to sign
const verifiableData = "this need to be verified"

const privateKey = fs.readFileSync('rsa_4096_priv.pem', 'utf8')
const publicKey = fs.readFileSync('rsa_4096_pub.pem', 'utf8')

// The signature method takes the data we want to sign, the
// hashing algorithm, and the padding scheme, and generates
// a signature in the form of bytes
const signature = crypto.sign("sha256", Buffer.from(verifiableData), {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
})

console.log('signature:', signature.toString("base64"))

// To verify the data, we provide the same hashing algorithm and
// padding scheme we provided to generate the signature, along
// with the signature itself, the data that we want to
// verify against the signature, and the public key
const isVerified = crypto.verify(
  "sha256",
  Buffer.from(verifiableData),
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  },
  signature
)

// isVerified should be `true` if the signature is valid
console.log("signature verified:", isVerified)
