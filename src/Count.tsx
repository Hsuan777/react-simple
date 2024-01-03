import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card text-center">
        <button className="mb-2" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Count
