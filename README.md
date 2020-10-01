<h3>Como Solucionei o Projeto </h3>
<p> Solucionei o projeto proposto ,através da criação de um projeto em laravev com uma api de produtos, e um front-end web em react js pra consumir a api
    
</p>




<h3>Instalação</h3>






### Clone

- Clone este repositório na sua máquina local 

### Setup


<ol> 
<li>Acesse a pasta Api</li>
<li>$ cp .env.example para .env </li>
<li>$ adicionar as configurações do banco de dados </li>
<li>$ composer install </li>
<li>$ php artisan migrate </li>
<li>$ php artisan key: generate </li>
<li>$ php artisan optimize:clear </li>
<li>$ php artisan serve </li>

</ol>


### Acesar API
  <h3>EndPoints</h3>
     <h2>Login:  </h2>
     <p>post api/product =>cria um produto  </p>
     <p>put api/product/id =>atualiza um produt </p>
     <p>get api/product =>pega os registros de todos os produtos</p>
      <p>get api/product/id =>pega os registros de um produto específico</p>
     <h4>Exemplo criação de um Produto em json:  </h4>
        <p>
            {
        "name": "mesa",
        "units": "2",
        "value: "2",
        }
        </p>

        
### Acesar Web
<ol> 
<li>Acesse a pasta Api</li>
  <li>de um "npm install"</li>
  <li>agora de um "npm start" e acesse o projeto</li>
  
 
