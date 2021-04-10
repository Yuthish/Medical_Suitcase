const crypto = require("crypto");
const { base } = require("../models/medicalrecord");

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
    var message = "digital signature";
    var fake="ufew" // prescription
    
    const signature = create_signature({ message }, keys.privateKey);
    var buff=new Buffer.from(signature.toString()) // signature...nobody understand
    console.log(verify_signature(buff, { message: fake }, keys.publicKey));
    console.log(buff);
    
}
// test_run()


module.exports ={
    generate_keys,
    create_signature,
    verify_signature
};


