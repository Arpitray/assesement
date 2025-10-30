import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e9ecef'
        }}>
            <div style={{ 
                marginTop: '10px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '15px',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='logic' label='Logic' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='transform' label='Transform' />
            </div>
        </div>
    );
};
