import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Counter App</h2>
        <div className="bg-gray-50 rounded-md p-4 mb-4">
          <h3 className="text-xl font-medium text-center">Count: <span className="text-blue-500">{count}</span></h3>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
            Tăng
          </button>
          <button 
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Giảm
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
