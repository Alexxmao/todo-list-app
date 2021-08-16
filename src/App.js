import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
   Heading,
   VStack,
 } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import "./App.css"
import TodoList from "./components/TodoList";
import AddTodo from './components/AddTodo';

export default function App() {
  const initialTodos = [
    {
        id: 1,
        body: 'get your money up not your funny up',
    },
    {
        id: 2,
        body: 'why does my text not show up now???'
    },
];

const [todos, setTodos] = useState(
  () => JSON.parse(localStorage.getItem("todos")) || []
)

useEffect(() => {
 localStorage.setItem("todos", JSON.stringify(todos)) 
}, [todos])

function deleteTodo(id) {
  const newTodos = todos.filter(todo => {
    return todo.id !== id
  })
  setTodos(newTodos)
}

function addTodo(todo) {
  setTodos([...todos, todo])
}

  return (
    <div>
      <ChakraProvider>
      <VStack p={4}>
        <ColorModeSwitcher alignSelf="flex-end"/>
        <Heading 
        mb="8"
        fontWeight="bold"
        size="xl"
        bgGradient="linear(to-r, purple.100 0%, purple.200 25%, blue.100 80%)"
        bgClip="text"
        >
          TODO LIST
        </Heading>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo}/> 
      </VStack>
      </ChakraProvider>
    </div>
  )
}
