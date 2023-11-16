import { useSelector } from'react-redux'


export const CountView = () => {
const count = useSelector(state => state.counter.count)
console.log(count);
  return (
    <div>{count}</div>
  )
}
