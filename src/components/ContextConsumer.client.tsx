import { useMyContext } from "contexts/MyContext.client";

export function ContextConsumer() {
  const contextValue = useMyContext();

  return <pre>{JSON.stringify(contextValue, null, 2)}</pre>;
}
