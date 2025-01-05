import ToDoContainer from '@/components/todo/ToDoContainer';
import Container from '@/components/ui/Container';
import React from 'react';

const ToDo = () => {
    return (
        <div>
            <Container >
                <h1 className='text-center text-red-400 text-3xl font-semibold '>My Todos</h1>
                <ToDoContainer />
            </Container>
        </div>
    );
};

export default ToDo;