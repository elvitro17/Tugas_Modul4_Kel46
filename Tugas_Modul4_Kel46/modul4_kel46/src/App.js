import React, {useState, useMemo, useCallback} from 'react';

function App() {
       
    const [fib, set_fib] = useState(3);
      
    const on_fib_changed = useCallback((e) => set_fib(Number(e.target.value)), []);
   
  

  return (
    <>
       
          <input value={fib} onChange={on_fib_changed} />

          <FibDisplay fib={fib} />
    </>
  );
}

function FibDisplay({fib}) {
  const numbers = useMemo(() => {
    console.log('Menghitung angka');
      const result = [1, 1];
      for (let i = 2; i < fib; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [fib  ]);

    return <p>{fib} jumlah bilangan  fibonacci: {numbers.join(', ')}</p>;
}




export default App;