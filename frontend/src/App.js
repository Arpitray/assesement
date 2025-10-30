import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
