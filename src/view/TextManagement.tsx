import NavBar from '../component/NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {
  Button,
  Col,
  Container,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { useState } from 'react';

const TextManagement = (props: any) => {
  const [previewText, setPreviewText] = useState('');
  const [showLangInput, setShowLangInput] = useState(false);
  const [showQuestionInput, setShowQuestionInput] = useState(false);
  return (
    <div className="meeting-management">
      <NavBar />
      <Container fluid>
        <h6>Please add the text here</h6>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{
            height: '40vh',
          }}
        />
        <h6>Actions to be taken</h6>
        <Container fluid>
          <Row>
            <Col>
              <Button variant="outline-primary">Change Tone</Button>
            </Col>
            <Col>
              <Button variant="outline-primary">Summarize</Button>
            </Col>
            <Col>
              <Button variant="outline-primary">Explain</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outline-primary">
                Grammatical Correction
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary">Expand Text</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="outline-primary"
                onClick={() =>
                  setShowLangInput((showLangInput) => !showLangInput)
                }
              >
                Translate Text
              </Button>
              {showLangInput && (
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Please Add Lang
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Language"
                    aria-label="Language"
                    aria-describedby="basic-addon1"
                  />
                  {/* TODO: Add the onClick listener for the same */}
                  <Button>Translate </Button>
                </InputGroup>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="outline-primary"
                onClick={() =>
                  setShowQuestionInput(
                    (showQuestionInput) => !showQuestionInput
                  )
                }
              >
                Ask Question
              </Button>
              {showQuestionInput && (
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Please Add your Question
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Question"
                    aria-label="Question"
                    aria-describedby="basic-addon1"
                  />
                  {/* TODO: Add the onClick listener for the same */}
                  <Button>Get Answer </Button>
                </InputGroup>
              )}
            </Col>
          </Row>
        </Container>
        <h6>Preview</h6>
        <Container>{previewText}</Container>
      </Container>
    </div>
  );
};
export default TextManagement;
