import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo de QRCode (1 - Normal) ou (2 - Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha entre 1 ou 2"),
        required: true,
    }
]

export default promptSchemaQRCode;