import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export default function AddTodo({addTodo}) {

    const toast = useToast()

    function handleSubmit( e) {
        e.preventDefault()
        if(!content) {
            toast({
                title: "Nothing to add",
                status: 'error',
                duration: 5000,
                isClosable: true
            })
            return
        }

        const todo = {
            id: nanoid(),
            body: content,
        }

        addTodo(todo)
        setContent("")
    }

    const [content, setContent] = useState("")

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="8">
                <Input 
                variant="filled" 
                placeholder="Input your item" 
                value={content} 
                onChange={(e) => setContent(e.target.value)}/>
                <Button 
                colorScheme="purple" 
                px="8" 
                type="submit">ADD TODO</Button>
            </HStack>
        </form>
    )
}
