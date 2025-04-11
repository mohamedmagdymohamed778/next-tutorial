import { Stream1, Stream2 } from './streaming.js';
import { Suspense } from 'react';




export default function TestPage() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Stream1 />
            </Suspense>     
            <Suspense fallback={<div>Loading stream2...</div>}>
                <Stream2 />
            </Suspense>
            <h1>Test Page</h1>
            <p>Welcome to the test page!</p>
        </div>
    );
}