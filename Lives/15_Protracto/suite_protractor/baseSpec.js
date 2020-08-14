const { browser, ExpectedConditions, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe(

    "Testes End-to-End no YouTube",

    function(){

        beforeAll(
            function(){
                // Qualquer código, primeiro a ser executado
            }
        );

        beforeEach(
            function(){
                browser.waitForAngularEnabled(false);
                browser.get(enderecoTeste);
            }
        );

        var enderecoTeste = "http://www.youtube.com.br";
        it(
            "Fazer uma busca na barra da home",
            function(){
                var campoBusca = element(by.css("input#search")); // Elemento da página HTML, input com id = search
                var botaoFiltro = element(by.css("paper-button#button[aria-label='Search filters']"));
                browser.wait(ExpectedConditions.elementToBeClickable(campoBusca));
                campoBusca.sendKeys("QArentena"); // Escreve a string na variável campoBusca (input de pesquisa do YouTube)
                campoBusca.sendKeys(protractor.Key.ENTER); // "Clica" tecla ENTER na barra de pesquisa
                browser.wait(ExpectedConditions.presenceOf(botaoFiltro)); // Busca o botão de filtro
            }
        );

        afterEach(
            function(){
                // Qualquer código
            }
        );

        beforeAll(
            function(){
                // Qualquer código
            }
        );
    }
);