export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <p>Start Adding Items 🌴</p>
      </footer>
    );
  }
  const numItems = items.length;
  const itemsPacked = items.reduce((s, item) => (item.packed ? s + 1 : s), 0);
  const percentage = Math.round((itemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "All Items are Added 💕"
          : `You have ${numItems} Items on your list, and you have already packaged ${itemsPacked} items(${percentage}%)`}
      </em>
    </footer>
  );
}
