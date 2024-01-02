const QRCode = require("qrcode");
const fs = require("fs").promises;
const crypto = require("crypto");
const opn = require("opn");
// const chalk = require("chalk");

async function gerarQRCode(dados, opcoes, caminhoDoArquivo) {
  try {
    const chalk = (await import("chalk")).default;
    const log = console.log;
    const hash = crypto.createHash("md5").update(dados).digest("hex");
    const caminhoArquivo = `${caminhoDoArquivo}/qrcode_${hash}.png`;
    const url = await QRCode.toDataURL(dados, opcoes);
    await fs.writeFile(caminhoArquivo, url.split(",")[1], "base64");
    log(
      chalk.blue(
        "QR Code gerado com sucesso" +
          chalk.red(": ") +
          chalk.green(`${caminhoArquivo}`)
      )
    );
    await opn(caminhoArquivo);
  } catch (err) {
    log(chalk.red("Erro ao gerar QR Code:", err));
  }
}

const dados = process.argv[2] || "www.facebook.com.br";

const opcoes = {
  errorCorrectionLevel: "H",
  type: "png",
  quality: 0.92,
  margin: 1,
  width: 500,
};

const caminhoArquivo = "./qrcodes/";

gerarQRCode(dados, opcoes, caminhoArquivo);
