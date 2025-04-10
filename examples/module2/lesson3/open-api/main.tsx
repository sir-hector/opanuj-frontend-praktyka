import { createRoot } from 'react-dom/client';
import { Characters } from './Characters';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <>
      <Characters />
    </>
  );
}
