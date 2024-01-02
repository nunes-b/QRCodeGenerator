const QRCode = require("qrcode");
const fs = require("fs").promises;
const crypto = require("crypto");
const opn = require("opn");

async function gerarQRCode(dados, opcoes, caminhoDoArquivo) {
  try {
    const hash = crypto.createHash("md5").update(dados).digest("hex");
    const caminhoArquivo = `${caminhoDoArquivo}/qrcode_${hash}.png`;
    const url = await QRCode.toDataURL(dados, opcoes);
    await fs.writeFile(caminhoArquivo, url.split(",")[1], "base64");
    console.log(`QR Code gerado com sucesso: ${caminhoArquivo}`);
    await opn(caminhoArquivo);
  } catch (err) {
    console.error("Erro ao gerar QR Code:", err);
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
