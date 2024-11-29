import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for(let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.floor(Math.random() * characters.length);
        password += characters[characterIndex];
    }

    return password;
}

export default handle;