import { useState } from "react";

export function TestComponent() {
  const [state, setState] = useState(0);
  return (
    <div className="flex flex-col">
      hello world: {state}
      <button className="border" onClick={() => setState(state + 1)}>
        Click Me
      </button>
    </div>
  );
}
