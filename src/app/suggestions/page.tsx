import { Suspense } from 'react';
import SuggestionsClient from './SuggestionsClient';

export default function SuggestionsPage() {
  return (
    <Suspense fallback={<div>Loading suggestions...</div>}>
      <SuggestionsClient />
    </Suspense>
  );
}
