## Inicialização

Install node js
Check node -v and npm -v no terminal
terminal Install Vite >  npm install vite -g

Download jersey-shop arquivo para a pasta escolhida

terminal cd .. 
terminal cd para pasta > cd jersey-shop-project
terminal cd jersey-shop-initial
terminal Code .
terminal npm install
terminal vite (deve rodar o projeto como um 'npm run dev')

se ao rodar o comando 'vite' aparecer esse erro > vite: o arquivo não pode ser carregado porque a execução de scripts foi desabilitada neste sistema:

terminal  Set-ExecutionPolicy Unrestricted
´´´ 

PS C:\repos\reactjs\jersey-shop-project\jersey-shop-initial> Set-ExecutionPolicy Unrestricted

Alteração da Política de Execução
A política de execução ajuda a proteger contra scripts não confiáveis. A alteração da política de execução pode
implicar exposição aos riscos de segurança descritos no tópico da ajuda about_Execution_Policies em
https://go.microsoft.com/fwlink/?LinkID=135170. Deseja alterar a política de execução?
[S] Sim  [A] Sim para Todos  [N] Não  [T] Não para Todos  [U] Suspender  [?] Ajuda (o padrão é "N"):
´´´


________________________________________________________________
## Estrutura

Arquivo **index.html**

Estrutura que chama a raiz main.jsx

Arquivo **main.jsx**

É a raiz, importa funções fundamentais do react para rodar a aplicação, como o react, o css

Criando a raiz da aplicação, a função render pega o ID root do html e renderiza no browser o componente do arquivo App.jsx

Arquivo **App.jsx**

É onde vamos iniciar o desenvolvimento da aplicação, a função App é o componente que retona o jsx que vai ser renderizado pelo Main.jsx no browser.

O return traz a parte visivel da aplicação. A pratica correta é que ele sempre deve usar o parenteses para englobar as multiplas linhas.

Tudo que estiver dentro do return deve estar dentro de um unico elemento raiz, geralmente um fragment '<> </>', mas tambem pode ser uma <div></div> por exemplo.

No jsx, sempre fechar tags img ou qualquer outra tag que no html nao precisa ser fechada com "/>"