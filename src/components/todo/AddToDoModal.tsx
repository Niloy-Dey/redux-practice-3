import { addTodo } from '@/redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import  { FormEvent, useState } from 'react';

const AddToDoModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
    const [task, setTask] = useState('');                  // State for task input
    const [description, setDescription] = useState('');     // State for description input
    const dispatch = useAppDispatch();
    const {todos} = useAppSelector((state) => state.todos)

    // Handle form submission
    const onSubmit = (e : FormEvent) => {
        e.preventDefault();

        const randomString = Math.random().toString(36).substring(2, 7)

        const taskDetails = {
            id: randomString,
            title : task,
            description: description,
        }
        console.log(taskDetails)
        dispatch(addTodo(taskDetails)); // Output task and description to console
        setIsModalOpen(false); // Close modal after submission
    };

    return (
        <div className="p-4">
            {/* Button to trigger the modal */}
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => setIsModalOpen(true)}
            >
                Add To Do
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Add Task</h2>
                        <form onSubmit={onSubmit}>
                            {/* Task Input */}
                            <div className="mb-4">
                                <label htmlFor="task" className="block text-sm font-medium mb-1">
                                    Task
                                </label>
                                <input
                                    id="task"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                    className="border rounded-md p-2 w-full"
                                    placeholder="Enter task name"
                                />
                            </div>

                            {/* Description Input */}
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium mb-1">
                                    Description
                                </label>
                                <input
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="border rounded-md p-2 w-full"
                                    placeholder="Enter task description"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded-md mr-2"
                                >
                                    Save Task
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-red-500 text-white py-2 px-4 rounded-md"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddToDoModal;
