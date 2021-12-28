Asymmetric Encryption 101
===

# Key generation

## 1. Generate a private key
Using `openssl`. If you are using MacOSX, `openssl` may need to be installed first using `homebrew`.
Note that we also specify the length of 4096 bits for the RSA private key:
```
$ openssl genrsa -out rsa_4096_priv.pem 4096
```


## 2. Generate a public key
The public key is generated using the private key:
```
$ openssl rsa -pubout -in rsa_4096_priv.pem -out rsa_4096_pub.pem
```
## 3. You can view those keys
They are saved on the local folder as `rsa_4096_priv.pem` and `rsa_4096_pub.pem`.
```
$ cat rsa_4096_priv.pem
$ cat rsa_4096_pub.pem
```
# Encryption and Signature

Two main features you can do with asymmetric encryption:
1. Encrypt a message using the public key and decrypt the encrypted message using private key.
  + This is used to communicate in the presence of adversaries.
  + Run `node encryption.js` to see the example.
2. Generate a signature from a message using a private key, and verify the signature using the public key.
  + This is used to verify the identity of private key holder.
  + Run `node signature.js` to see the example.
