<h2># zapay-django-react</h2>
<h1>Desenvolvimento de uma API em Pythom/Django com Frontend React</h1>

<h2>Objetivo:</h2>
Elaborar uma API em Python/Django que consuma a API da SpaceX e seja capaz de
apresentar as seguintes informações:

1. Próximo Lançamento
2. Último Lançamento
3. Próximos Lançamentos
4. Lançamentos Passados

Além disso, fazer um frontend em React que irá se comunicar com essa API que
você criou e apresentar as informações acima.

O projeto é dividido em dois diretórios:
* frontend 
* zapay_api (backend)

<h3>[ BackEnd ]</h3>

## Para iniciar o servidor de desenvolvimento Django, utilizar o seguinte comando dentro do diretório "zapay_api"
    python manage.py runserver

Não está funcional a resposta para os métodos GET para o cliente, devido a não conseguir responder o consumo da SpaceX.

A funcionalidade que elaborei é:

1. Criar um model com tabelas para cada um dos requisitos, possuindo apenas um campo TextField, denominado 'arq_return', aonde será armazenado o dicionario do JSON inteiro
2. Serializer configurado para responder somente o campo 'arq_return'
3. Services responsáveis por consumir a API e retornar um dicionario do JSON para a View
4. View retornará para o cliente um dicionario contendo os dados do request na SpaceX

<h3>[ FrontEnd ]</h3>

Frontend realizado com React + bootstrap para estilização das páginas

Para rodar o projeto utilizar os seguintes comandos dentro do diretório frontend:

## Para iniciar o ambiente de desenvolvimento
	npm start
	
Servidor rodará no http://localhost:3000

Neste projeto foi utilizado bootstrap e os arquivos CSS foram adquiridos no seguinte endereço:
##
    https://startbootstrap.com/templates/business-frontpage/
    
Página principal:

![alt text](frontend/pagina_principal.png)

Devido a API não estar retornando os dados adequadamente e para fins de exibição, as páginas estão lendo arquivos Json dentro do diretório "src/data"

<h1>Ferramentas para desenvolvimento:</h1>

* JetBrains WebStorm - Desenvolvimento React
* JetBrains PyCharm - Desenvolvimento Python/Django


