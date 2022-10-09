import Container from "react-bootstrap/Contaier";
import Stack from "react-bootstrap/Stack";
import Sidebar from "./Sidebar";

function Body( {sidebar, children} ) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        <Container className="Content">
          {children}
        </Container>
      </Stack>
    </Container>
  );
}

export default Body