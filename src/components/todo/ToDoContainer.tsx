import ToDoCard from './ToDoCard';
import AddToDoModal from './AddToDoModal';
import ToDoFilter from './ToDoFilter';
import { useAppSelector } from '@/redux/hooks';
import { useGetTodosQuery } from '@/redux/api/api';

const ToDoContainer = () => {
    // Fetch todos from server
    const { data: todosData, isLoading, isError } = useGetTodosQuery(undefined);

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    if (isError) {
        return <p>Something went wrong. Please try again later.</p>;
    }

    // Ensure todos is an array
    const todosList = todosData?.todos || [];

    return (
        <div className='p-4 bg-gray-100 '>
            {/* Buttons section */}
            <div className='flex justify-between items-center mb-4'>
                <AddToDoModal />
                <ToDoFilter />
            </div>

            <div className='bg-white p-3 flex justify-center items-center'>
                <div>
                    {todosList.length > 0 ? (
                        todosList.map((item) => (
                            <ToDoCard 
                                key={item.id}
                                id={item.id} 
                                title={item.todo} // Mapping "todo" to "title"
                                description={`User ID: ${item.userId}`} // You can display other info here
                                isCompleted={item.completed} // Mapping "completed" to "isCompleted"
                            />
                        ))
                    ) : (
                        <p>There are no tasks pending</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToDoContainer;
