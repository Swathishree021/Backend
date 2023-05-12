//hashing and encrypting

const crypto = require("crypto");

//Creating a variable called secret 
const secret = "pppppppppppppppppppppppppppppppp";

const encrypt = (password)=> {
    //iv is a identifier for encryption 
    const iv = Buffer.from(crypto.randomBytes(16));
    
    //encrypting a password by creating a cipher variable
    const cipher = crypto.createCipheriv
    ("aes-256-ctr",Buffer.from(secret),iv); 
     //[3 parameter passing in 1st argument is algorithm  "aes-256-ctr",
     // 2nd transform secret into buffer and pass that "Buffer.from(secret)",
     // 3rd we r passing the identifier "iv"]
    
    // Create a variable called encryptedPassword,
    // Create a buffer that concate both the encrypted password and passing array with 2 arguments
    //  1st is the value to encrypt the password using cipher to update the password "cipher.update(password)",
    // 2nd pass the end of the cipher using ciher.final().
    // after passing encrypted password  value it would be holding hash value for encryption
        const encryptedPassword = Buffer.concat([
        cipher.update(password),
        cipher.final() ]);
        
        //Buffer to be transformed to be String 
        //instead returning encryted password we will return an object containing iv and password
        return { 
            iv: iv.toString("hex"),
            password: encryptedPassword.toString("hex"),
        };
    };

const decrypt = (encryption) => {  
   //create a decipher
   const decipher = crypto.createDecipheriv(
    "aes-256-ctr", 
    Buffer.from(secret), 
    //accesing the iv from encrypt function
    //passing the encryption as argument 
    //transfer back to buffer from hex value previously
    Buffer.from(encryption.iv,"hex")
    );
    
    //creating a variablle called decrypted
    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryption.password, "hex")),
        decipher.final() 
    ]);

    //return the decrypted password
    return decryptedPassword.toString()
     
};

module.exports = {encrypt, decrypt};