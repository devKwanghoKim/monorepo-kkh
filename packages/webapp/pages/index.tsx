/**
 * packages/webapp/pages/index.tsx
 */
import { Button } from '@packages/coreui';

export default function App() {
  const onClick = ()=>{
    alert('onClick')
  }
  const onBlur = ()=>{
    console.log('onBlur')
  }
  const onFocus = ()=>{
    console.log('onFocus')
  }
  return (
    <div>
      <Button 
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
      >click</Button>
    </div>
  );
}