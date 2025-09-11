type myNumber = number;

const sockes :myNumber =12;

type Employee  = {
  id:number,
  name:string,
  email:string,
  salary:number,
  address ?: string
}

const Rakib :Employee ={
  id:12,
  name: 'Rakibul Islam',
  email:'rakib@gmail.com',
  salary:21
}

type Department ={
  name:string,
  emplyees : Employee[]
}

const sales : Department ={
  name :'sales',
  emplyees :[Rakib]
}

type ISBN = number |string;

const book_a_isbn  :ISBN = 1234;
const book_b_isbn :ISBN = '12456';

type Book ={
  title :string,
  pages :number,
  isbn:ISBN
}

type Writer ={
  name: string,
  age :number,
  address :string
}

type BookWriter = Book & Writer;

const bookAndWritter :BookWriter ={
  title :"Learning Typescript Book",
  pages:123,
  isbn:3214,
  name:"Rakibul Islam",
  age:40,
  address:'bangladesh'
}

type startsWithLWS =`LWS${string}`

const sumitSaha:startsWithLWS ='LWS-Sumit Saha';