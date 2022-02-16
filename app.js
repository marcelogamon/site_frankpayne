const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index')
const acessoExclusivoRouter = require('./routes/acessoExclusivo');
const autorRouter = require('./routes/autor');
const contatosRouter = require('./routes/contatos');
const livro1Router = require('./routes/livro1');
const livrosRouter = require('./routes/livros');
const sucessoRouter = require('./routes/sucesso');
const erro404Router = require('./routes/erro404');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/acessoExclusivo', acessoExclusivoRouter);
app.use('/autor', autorRouter);
app.use('/contatos', contatosRouter);
app.use('/livro1', livro1Router);
app.use('/livros', livrosRouter);
app.use('/sucesso', sucessoRouter);
app.use('/erro404', erro404Router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log("Server has started at port " + PORT))