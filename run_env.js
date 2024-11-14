const { exec } = require('child_process');

// Função para executar comandos de forma assíncrona e aguardar a conclusão
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(`Erro ao executar o comando: ${command}\n${stderr}`);
            } else {
                console.log(`Comando executado: ${command}`);
                console.log(stdout);
                resolve();
            }
        });
    });
}

async function run() {
    const env = process.argv[2];  // Verifica o argumento passado

    try {
        if (env === 'dev') {
            console.log("\nExecutando ambiente de desenvolvimento...");
            await runCommand('npm run dev'); // Rodando dev
            console.log("Geração de arquivos de desenvolvimento...");
            await runCommand('php vendor/bin/sculpin generate --env=dev');
            await runCommand('php vendor/bin/sculpin generate --env=prod');
            //console.log("Iniciando o servidor local (output_dev)...");
            //await runCommand('php -S localhost:8000 -t output_dev'); // Servidor de dev

        } else if (env === 'prod') {
            console.log("\nExecutando ambiente de produção...");
            await runCommand('npm run prod'); // Rodando prod
            console.log("Geração de arquivos de produção...");
            await runCommand('php vendor/bin/sculpin generate --env=dev');
            await runCommand('php vendor/bin/sculpin generate --env=prod');
            //console.log("Iniciando o servidor local (output_prod)...");
            //await runCommand('php -S localhost:8000 -t output_prod'); // Servidor de prod
        } else {
            console.log("\nExecutando ambiente sem parâmetros...");
            await runCommand('npm run dev'); // Rodando dev
            console.log("Geração de arquivos sem parâmetros...");
            await runCommand('php vendor/bin/sculpin generate --env=dev');
            await runCommand('php vendor/bin/sculpin generate --env=prod');
            //console.log("Iniciando o servidor local (output_dev)...");
            //await runCommand('php -S localhost:8000 -t output_dev'); // Servidor sem parâmetros
        }
    } catch (error) {
        console.error("Erro durante a execução dos comandos:", error);
    }
}

run();
