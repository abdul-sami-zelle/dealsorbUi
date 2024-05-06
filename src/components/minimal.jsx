import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <section className="pt-5 pb-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3 className="mb-3">Carousel cards title</h3>
          </Col>
          <Col xs={12} md={6} className="text-md-right">
            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </a>
          </Col>
          <Col xs={12}>
            <Carousel id="carouselExampleIndicators2">
              <Carousel.Item>
                <Row>
                  <Col xs={12} md={12} className="mb-3">
                    <Card>
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={12} className="mb-3">
                    <Card>
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={12} className="mb-3">
                    <Card>
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} md={12} className="mb-3">
                    <Card>
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                      <Card.Body>
                        <Card.Title>as;dmksdnlt</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* More col-md-4 cards */}
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyComponent;
