# Generate Mega JSON

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://sj-silva.github.io/generate-mega-json/)

Uma ferramenta web simples para converter o arquivo Excel da Mega-Sena em formato JSON.

## 🎯 Sobre o Projeto

Este projeto permite que usuários convertam facilmente o arquivo Excel oficial da Mega-Sena, disponibilizado pela Caixa Econômica Federal, em um arquivo JSON estruturado. O JSON gerado inclui informações como número do concurso, data do sorteio, números sorteados e indicação de ganhadores.

## 🚀 Como Usar

1. Primeiro, baixe o arquivo Excel da Mega-Sena:

   - Acesse [Loterias Caixa - Mega-Sena](https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx)
   - Localize e baixe o arquivo `Mega-Sena.xlsx`

2. Converta o arquivo para JSON:
   - Acesse nossa [página web](https://sj-silva.github.io/generate-mega-json/)
   - Clique no botão "Iniciar Upload"
   - Selecione o arquivo `Mega-Sena.xlsx` que você baixou
   - Aguarde a mensagem de confirmação: "Arquivo selecionado: Mega-Sena.xlsx"
   - Clique no botão "Converter para JSON"
   - Quando aparecer a mensagem "Arquivo processado com sucesso!", clique em "Download JSON"

## 📋 Estrutura do JSON Gerado

O arquivo JSON gerado contém as seguintes informações para cada concurso:

- Número do concurso
- Data do sorteio
- Números sorteados
- Indicação de ganhadores

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- [SheetJS](https://sheetjs.com/) para processamento de arquivos Excel

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Sergio Silva

## ⭐ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request
