# Criptografia Assimétrica com RSA em TypeScript

Este projeto implementa criptografia e descriptografia de mensagens usando o algoritmo de criptografia assimétrica RSA (Rivest-Shamir-Adleman) em TypeScript. O RSA é um dos algoritmos de criptografia assimétrica mais populares e é amplamente utilizado para garantir a segurança e a autenticidade dos dados através de um par de chaves pública e privada.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação tipada que compila para JavaScript.
- **Node.js**: Ambiente de execução que permite rodar JavaScript e TypeScript no servidor.
- **RSA (Rivest-Shamir-Adleman)**: Algoritmo de criptografia assimétrica que utiliza pares de chaves para cifrar e decifrar mensagens.

## Funcionalidades

- Geração de um par de chaves RSA (pública e privada).
- Cifra uma mensagem de texto com a chave pública.
- Decifra a mensagem cifrada com a chave privada.
- Permite que o usuário forneça uma mensagem personalizada para ser cifrada.

## Estrutura do Projeto

- `index.ts`: Código principal que implementa a lógica de geração de chaves, criptografia e descriptografia.
- `tsconfig.json`: Arquivo de configuração do TypeScript.
- `package.json`: Gerencia dependências e scripts do projeto.

## Como Executar o Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Phillipe17Macedo/Asymmetric-Encryption-Message-Protection.git
   cd seu-repositorio
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Compile o Código TypeScript**

   ```bash
   npx tsc
   ```

4. **Execute o Código**

   ```bash
   node dist/index.js
   ```

   O programa solicitará que você digite uma mensagem para ser cifrada. Após a entrada, ele exibirá a versão cifrada da mensagem e a versão decifrada (original).

## Exemplo de Uso

```bash
Digite a mensagem que deseja cifrar: Esta é uma mensagem secreta!

Mensagem Cifrada: <valor cifrado em base64>
Mensagem Decifrada: Esta é uma mensagem secreta!
```

## Dependências

- `crypto`: Módulo nativo do Node.js utilizado para operações de criptografia.
- `@types/node`: Fornece as definições de tipo para Node.js, garantindo compatibilidade com TypeScript.

## Como Funciona

1. **Geração de Chaves RSA**: A função `generateKeys` cria um par de chaves RSA (pública e privada) com tamanho de 2048 bits.
2. **Cifra com Chave Pública**: A função `encryptMessage` utiliza a chave pública para cifrar a mensagem do usuário. A cifragem é realizada usando o preenchimento OAEP com SHA-256 para segurança.
3. **Decifra com Chave Privada**: A função `decryptMessage` usa a chave privada para decifrar a mensagem cifrada, retornando-a ao texto original.

## Observações

- Esta implementação é destinada para estudos de criptografia assimétrica em TypeScript e Node.js.
- RSA com preenchimento OAEP e SHA-256 fornece segurança robusta para mensagens de texto curtas.

## Contribuição

Se quiser contribuir com melhorias, abra uma _issue_ ou faça um _fork_ e envie um _pull request_.

---

### Licença

Este projeto está sob a licença MIT.
