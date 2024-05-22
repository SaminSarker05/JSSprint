/* 

====== PORTS

- port is a communication endpoint
- different ports for different traffic
- always need to use end for response to send back data


====== HTTP METHODS

http methods: 
GET - read
POST - insert
PUT - update
DELETE - delete

express - web framework for nodejs
makes web development in nodejs easier

useful express methods
app.get reading
app.post inserting
app.put updating
app.delete deleting
app.all all
all.use
app.listen ports

browsers perform GET request by default

use keyword used for middleware registration, ie static files
static files - not changed; image, styles, js


====== API DEVELOPMENT

express usages
API or SSR (sever side rendering)

API (application programming interface) interface to interact with data
- send data
- res.json()

SSR
- send template
- res.render()

JSON - javascript object notation

find method:
- searches for element in an array
- takes in callback function with a boolean expression

e.g
const singleProduct = products.find((product) => { 
    if (product.id === Number(productId)) {
      return product;
    }
  })

const found = array.find((element) => {element.id === 10});

map method:
creates a new array with specifications of callback func

can use route paramaters to get specific resources

url parameters: send info to server using url
- used for querying database
- can pass in key value pairs
http://localhost:8000/api/v1/query?name=samin&age=19
how to pass in

spread operator [...name]
allows expansion of an iterable and copying

array.slice(inclusive, exclusive)
makes a slice of the provided array


====== MIDDLEWARE
- functions that request during request to the server
- has access to request and response objects
- between request and response
- must specify passing between middleware using next() method

use keyword to use middleware across all url patterns
app.use('path', func)
mounts middleware at specified path

for multuoke middleware plan in an array
executed in order of array

- express also provides middleware and third parties

*/