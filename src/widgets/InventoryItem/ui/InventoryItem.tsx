    interface InventoryItemProps {
    text: string
}

const InventoryItem = ({ text } : InventoryItemProps) => {
    return (
        <div className="w-full p-4 border-2 border-[#6c757d] rounded-md">
            {text}
        </div>
    )
} 

export { InventoryItem }