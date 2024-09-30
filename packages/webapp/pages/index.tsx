/**
 * packages/webapp/pages/index.tsx
 */
import { Button } from '@packages/coreui';

export default function App() {
  return (
    <div>
      <Button onClick={() => alert('hello123')}>click</Button>
    </div>
  );
}