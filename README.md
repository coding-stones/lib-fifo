# FIFO Queue

~~~ session
$ ( npm import | yarn add ) https://github.com/coding-stones/lib-fifo
~~~

~~~ javascript
import FIFO from "lib-fifo"
const queue = new FIFO()

console.log(queue.size())   // => 0

queue.add(99)
queue.add(100)

console.log(queue.size())   // => 0

queue.take()                // => 99
console.log(queue.size())   // => 1
queue.take()                // => 100
console.log(queue.size())   // => 0
~~~

### Context

This code is part of the Coding Stones _Level Up_ course, and is written 
as a simple illustration. It is not indended to be used in other projects.

### License

See [license.md](./license.md)`
