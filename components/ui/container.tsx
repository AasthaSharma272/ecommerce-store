interface ContainerProps{
    children: React.ReactNode;
}

// container component to store different items in the website
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    );
}

export default Container;