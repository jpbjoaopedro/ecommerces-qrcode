import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/create.js';

async function main() {
    prompt.get(mainPrompt, async function (err, choose) {
        if (err) {
            console.log('Erro na aplicação');
            return;
        }
        if (choose.select == 1) createQRCode();
        if (choose.select == 2) console.log('PASSWORD escolhido');
    });

    prompt.start();
};

main();