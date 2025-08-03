import { preferencesStore } from "@/stores/preferences";
import { useStore } from "@nanostores/react";

export function YTTApp() {
  const preferences = useStore(preferencesStore);

  return (
    <div>
      <h1>앱이다. ㅋ</h1>
    </div>
  );
}
