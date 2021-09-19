import React, {useState, useMemo, useCallback} from 'react';

function App() {
       
       const [name, set_name] = useState(' ');
       const [nim, set_nim] = useState(' ');
       const [fib, set_fib] = useState(3);
      
       const on_name_changed = useCallback((e) => set_name(e.target.value), []);
       const on_nim_changed = useCallback((e) => set_nim(e.target.value), []);
       const on_fib_changed = useCallback((e) => set_fib(Number(e.target.value)), []);
   
  

  return (
    <>
        <input value={name} onChange={on_name_changed} />
        <NameDisplay name={name} />
        <input value={nim} onChange={on_nim_changed} />
        <NimDisplay nim={nim} />
      <hr />

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

const NameDisplay = React.memo(function ({name}) {
  console.log('Nama Diubah');
  return <p>Nama = {name}</p>;
});

const NimDisplay = React.memo(function ({ nim }) {
    console.log('Nim Diubah');
    return <p>NIM = {nim}</p>;
});



export default App;
