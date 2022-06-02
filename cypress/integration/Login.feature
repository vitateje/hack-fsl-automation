Feature: Login site Automation Demo Site ADS

    Background: Acessar o site ADS
        Given acesso o site ADS

    @testeum
    Scenario: Visualizar opção de recuperar senha esquecida
        When acesso a pagina de login
        Then devo visualizar botao de recuperar senha esquecida

    @testedois
    Scenario Outline: Realizar login com dados inválidos
        Given acesso a pagina de login
        And informo <email> incorreto
        And informo <senha> incorreta
        When clico no botão de realizar login
        Then devo visualizar mensagem de erro

        Examples:
            | email                  | senha      |
            | vitor@gmail.com       | Senha94030 |
            | othervitor@hotmail.com | 999820SgB  |
