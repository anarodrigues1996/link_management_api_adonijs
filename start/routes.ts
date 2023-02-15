import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/api/links', 'LinksController.getAll')
Route.post('/api/links', 'LinksController.create')
Route.get('/api/links/:id', 'LinksController.find')