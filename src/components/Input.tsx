import { Container } from "../styles/components/Input";

import { InputInterface } from "../interfaces/Input";

export default function Title({ label, ...rest }: InputInterface) {
  return (
    <Container>
      <input autoComplete="off" {...rest} required />
      <label className="placeholder-text">
        <div className="text">{label}</div>
      </label>
    </Container>
  );
}
