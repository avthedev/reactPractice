function CoinTossCounter() {
  const [results, setResults] = useState([]);
  const [counts, setCounts] = useState({ H: 0, T: 0 });
  const handleClick = (value) => {
    setResults([...results, value]);
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
  };
  console.log(counts);
  const handleDeleteLast = () => {
    const last = results[results.length - 1];
    const list = results.slice(0, -1);

    setResults(list);
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };
  const lis = results.map((result, index) => (
    <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
  ));
  return (
    <section>
      <div>
        <button onClick={() => handleClick("H")}>Heads</button>
        <button onClick={() => handleClick("T")}>Tails</button>
        <button onClick={handleDeleteLast}>Delete Last</button>
      </div>
      <ul>{lis}</ul>
    </section>
  );
}
