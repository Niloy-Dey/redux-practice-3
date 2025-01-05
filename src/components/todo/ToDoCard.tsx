import { removeToDo, toggleComplete } from '@/redux/features/todoSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';

type TTodoCardProps = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

const ToDoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
    const dispatch = useAppDispatch();

    const toggleState = () => {
        dispatch(toggleComplete(id));
    };

    return (
        <div>
            {/* ToDo List section */}
            <div className='w-full rounded-xl p-4 shadow-md'>
                <div className='flex justify-between items-center bg-white p-4 rounded-md mb-2 shadow-sm'>
                    <div className='flex items-center'>
                        <input
                            onChange={toggleState}
                            name='complete'
                            id='complete'
                            type="checkbox"
                            checked={isCompleted} // Reflect the completed status
                            className='mr-4'
                        />
                        <div className='mx-4'>
                            <p className='font-semibold'>{title}</p>
                            <p>{isCompleted ? "Done" : "Pending"}</p>
                            <p className='text-gray-600'>{description}</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <button onClick={() => dispatch(removeToDo(id))} className='bg-red-500 text-white px-3 py-1 rounded'>Del</button>
                        <button className='bg-yellow-400 text-white px-3 py-1 rounded'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;
