
import { FitnessContext } from './Context';
import StackNavigation from './Navigation/StackNavigation';


export default function App() {
  return (
      <FitnessContext style={{backgroundColor:"white"}}>
      <StackNavigation/>
      </FitnessContext>
  );
}

