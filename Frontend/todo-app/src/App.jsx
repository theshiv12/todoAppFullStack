import {CreateTodo} from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  return (
<div>
  <CreateTodo></CreateTodo>
  <Todos todos={[
    {
      title:"Go to gym",
      description:"Need to go to gym at sharp 7am"
    }  ,  {
      title:"Go to gym 2",
      description:"Need to go to gym at sharp 7am"
    }   , {
      title:"Go to gym 3",
      description:"Need to go to gym at sharp 7am"
    }
  ]}></Todos>
</div>
  )
}

export default App
