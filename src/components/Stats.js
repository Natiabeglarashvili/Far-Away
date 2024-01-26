export default function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
        <footer
            className="stats">
            <em>
                {percentage === 100
                    ? "ყველაფერი არჩეულია ! ბედნიერი მოგზაურობა! 🚀"
                    : ` 🧳 თქვენ უკვე შეარჩიეთ ${numItems} ნივთი, გთხოვთ  გააკეთოთ სასურველი ნივთის აღნიშვნა
         ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
