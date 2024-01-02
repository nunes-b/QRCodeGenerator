# Gerador de Códigos QR

O gerador de QRCODE é uma função em Node.js simples que utiliza a biblioteca \`qrcode\` para gerar códigos QR. O código QR é gerado a partir de dados de entrada e a imagem resultante é salva em um diretório especificado. O aplicativo também faz uso dos módulos \`crypto\` para geração de hash, \`fs.promises\` para operações de arquivo e \`opn\` para abrir a imagem do código QR gerado.

## Função Principal

### gerarQRCode(dados, opcoes, caminhoDoArquivo)

Esta função gera um código QR com base nos parâmetros fornecidos:

- \`dados\`: Dados a serem codificados no código QR, com um padrão de "www.facebook.com.br" caso não seja fornecido pela linha de comando.
- \`opcoes\`: Objeto de opções para configurar a geração do código QR, incluindo nível de correção de erro, tipo de imagem, qualidade, margem e largura.
- \`caminhoDoArquivo\`: Caminho do diretório onde a imagem do código QR gerado será salva.

## Como Usar

1. Instale as dependências necessárias:

```bash
npm install
```

2. Execute a aplicação:
```bash
node gerarQRCode.js [dados]
```
dados é um argumento opcional representando os dados a serem codificados no código QR.
Visualize a imagem do código QR gerado no diretório de saída especificado.

### Exemplo de Comando
```bash
node gerarQRCode.js www.exemplo.com
```

<p align="center">
  <img width="400" height="400" src="https://github.com/romulotgh21/QRCodeGenerator/assets/85138285/a7a6712c-d488-4006-bb8b-4751bc92eafa" alt="Exemplo de QRCODE gerado pela função">
  <br>
  <strong>Exemplo:</strong> Escaneie a foto acima com o seu smartphone ou leitor de QRCode.
</p>


