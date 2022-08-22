import { ContextConsumer } from "../components/ContextConsumer.client";
import { MyContextProvider } from "../contexts/MyContext.client";

export default function Home() {
  return (
    <MyContextProvider translations={{ helloworld: "Hello world" }}>
      <div>Hello World</div>
      <ContextConsumer />
    </MyContextProvider>
  );
}
