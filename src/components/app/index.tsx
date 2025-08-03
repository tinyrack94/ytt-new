import { useStore } from '@nanostores/react';
import { preferencesStore } from '@/stores/preferences';

export type YTTAppProps = {
  language: string;
};

export function YTTApp() {
  const preferences = useStore(preferencesStore);

  return (
    <div>
      <h1>앱이다. ㅋ</h1>
    </div>
  );
}
