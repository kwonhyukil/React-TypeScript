type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="World" />;
}
