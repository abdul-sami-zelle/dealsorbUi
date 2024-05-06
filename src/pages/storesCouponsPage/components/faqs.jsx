import Accordion from 'react-bootstrap/Accordion';
import '../../storesCouponsPage/stores.css'

function FAQS({ faqs }) {
  return (
    <Accordion style={{ backgroundColor: 'pink !important' }}>
      {faqs.map((faq, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default FAQS;