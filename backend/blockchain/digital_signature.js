const crypto = require("crypto")

const generate_keys = () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
          },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
          }
    });
    return { publicKey, privateKey }
}


const create_signature = (prescription_JSON, private_key)=>{
    const verifiableData = JSON.stringify(prescription_JSON);
    const signature = crypto.sign("sha256", Buffer.from(verifiableData), {
        key: private_key,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    })
    return signature;
}


const verify_signature = (signature, prescription_JSON, public_key) =>{
    const verifiableData =  JSON.stringify(prescription_JSON);
    const isVerified = crypto.verify(
        "sha256",
        Buffer.from(verifiableData),
        {
            key: public_key,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        },
        signature
    )
    console.log("signature verified: ", isVerified)
    return isVerified
    
}

const test_run = () => {
    const keys = generate_keys();
    console.log(keys);
    message = "digital signature"; // prescription
    const signature = create_signature({ message }, keys.privateKey); // signature...nobody understand
    // verify_signature(signature, { message: message }, keys.publicKey);
    console.log(signature);
}
test_run()


module.exports ={
    generate_keys,
    create_signature,
    verify_signature
};


