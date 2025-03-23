type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode
}

export const Calculator: React.FC<ButtonProps> = ({onClick, children}) => {
 return (
    <button onClick={onClick} className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md">
        {children}
    </button>
 )
}