0. Общее правило для любых проверяемых клиентских разработок

  должен быть элемент h4 c 
  
    - id="author", 
    
    - title="GossJS" 
    
    - и вашими ФИО в качестве текст-контента
    
    
   
   ≺h4 id="author" title="GossJS"≻Иван Иванов≺/h4≻ - так это должно выглядеть
   
   Это проверяет сценарий z7a.mjs
   
   node --experimental-modules z7a.mjs https://infinite-lake-15917.herokuapp.com/
   
    если URL не указан, проверяется https://kodaktor.ru/g/boo 
   

1. Пример работающего теста с образцом клиентского приложения

(приложение проверяет, является ли значение get-параметра test верным простым адресом gmail)

https://github.com/gossoudarev/webteach/tree/master/testing_promise/mocha_zombie_new/testing_gmail_reg

Для запуска:

```bash
svn checkout https://github.com/gossoudarev/webteach/trunk/testing_promise/mocha_zombie_new/testing_gmail_reg
yarn install 
yarn test
```

2. Лабораторная работа по промисифицированному безголовому тестированию клиентского веб-приложения:

https://kodaktor.ru/g/lr_yandextestclick


