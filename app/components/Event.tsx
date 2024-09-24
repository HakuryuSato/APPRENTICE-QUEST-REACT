export default function App() {
  const handleClick = () => {
    alert("送信しました！");
  };

  return (
    <button onClick={handleClick}>
      送信する
    </button>
  );
}