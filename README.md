# dispositivos-mobile

Projetos para a disciplina de Programação para dispositivos mobile

## Desenvolvimento

1. Clone o repositório e acesse-o
    * Por `HTTPS`

        ```bash
        git clone https://github.com/LucasVmigotto/dispositivos-mobile.git
        cd sgpj
        ```

    * Por `ssh`

        ```bash
        git clone git@github.com:LucasVmigotto/dispositivos-mobile.git
        cd sgpj
        ```

2. Renomeie os arquivos
    * `.env.exmaple` => `.env`
    > Caso necessário, customize as variáveis internas

3. Instale as dependências

    ```bash
    yarn
    ```

4. Utilize os serviços

    * **_REACT_**:
        * Subir o serviço:

            ```bash
            docker-compose up react
            ```

        * Utilizar a `CLI`:

            ```bash
            docker-compose run --rm --service-ports react bash
            ```
