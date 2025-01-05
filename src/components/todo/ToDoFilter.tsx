import React from 'react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const ToDoFilter = () => {
    const [position, setPosition] = React.useState("bottom")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button className="bg-green-500 text-white py-2 px-4 rounded-md">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ToDoFilter;