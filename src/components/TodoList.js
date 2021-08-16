import { 
    HStack, 
    VStack, 
    Text, 
    IconButton, 
    StackDivider,
    Spacer,
    Badge
} from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from 'react-icons/fa';

export default function TodoList({todos, deleteTodo}) {
   
    if (!todos.length) {
        return (
            <div>
                <Badge colorScheme="blue" p="4" m="4" borderRadius="lg">
                    Nothing Here
                </Badge>
            </div>
        )
    }
   
    return (
        <div>
            <VStack 
            divider={<StackDivider/>} 
            borderColor="gray.100" 
            borderWidth="2px" 
            p="4" 
            borderRadius="lg" 
            w="100%"
            maxW={{base:"90vw", sm:"80vw", lg:"50vw", xl:"40vw" }}
            alignItems="stretch"
            >
                {todos.map(todo => (
                    <HStack>
                        <Text>{todo.body}</Text>
                        <Spacer/>
                        <IconButton aria-label="trash" icon={<FaTrash/>} isRound onClick={() => deleteTodo(todo.id)}/>
                    </HStack>
                ))}
            </VStack>
        </div>
    );
}
