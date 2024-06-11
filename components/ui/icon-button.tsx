import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

// Props interface for IconButton component
interface IconButtonProps{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined; // onclick component on icon
    icon: React.ReactElement, // Icon element to be displayed in the button
    className?: string //css styling
}

// IconButton component definition
const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon, 
    className
}) => {
    return (
        // options in the button comp and cn used to style the button
        <button
        onClick={onClick}
        className={cn(
            "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", className
        )}
        >
            {icon} {/* Icon element passed from props */}
        </button> 
    );
}

export default IconButton;