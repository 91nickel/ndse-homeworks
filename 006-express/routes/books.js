const express = require('express');
const store = require('../models/store');
const Book = require('../models/book')
const router = express.Router();

router.get('/', function (request, response) {
    return response.render('books/index', {title: 'Все книги', items: store.select()})
})
router.get('/view/:id', function (request, response) {
    const book = store.select(request.params.id);
    if (book) {
        return response.render('books/view', {title: `Просмотр ${book.title}`, item: book})
    }
    return response.status(404).render('404')
})
router.get('/create', function (request, response) {
    return response.render('books/create', {title: 'Создание новой книги', fields: Book.defaultFields})
})
router.post('/create', function (request, response) {
    const book = store.add(request.body);
    return response.redirect(`/books`);
})
router.get('/update/:id', function (request, response) {
    const book = store.select(request.params.id);
    if (book) {
        return response.render('books/update', {title: `Просмотр ${book.title}`, item: book})
    }
    return response.status(404).render('404')
})
router.post('/update/:id', function (request, response) {
    const book = store.select(request.params.id);
    if (book) {
        book.update(request.body);
        return response.redirect(`/books`);
    }
    return response.status(404).render('404')
})
router.post('/delete/:id', function (request, response) {
    const book = store.select(request.params.id);
    if (book) {
        store.delete(request.params.id);
        return response.redirect(`/books`);
    }
    return response.status(404).render('404')
})

module.exports = router;