import { styled, css } from "twin.macro";

const Container = styled("div")(({ color }) => [
  css`
    color: ${color};
  `,
]);

export default function Home() {
  return (
    <div>
      <Container color="red">123</Container>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
