import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Video extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={4}>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/7LWymPXLCFw" 
                        frameBorder="0" 
                        gesture="media" 
                        allow="encrypted-media" 
                        allowFullscreen>
                    </iframe>
                    </Col>
                    <Col lg={6}>
                        <h3>Summer Opening 2012 First Talk - Thich Nhat Hanh</h3>
                        <p>
                            <strong>Teacher: </strong>
                            Thich Nhat Hanh
                        </p>
                        <p>
                            <strong>Language: </strong>
                            English
                        </p>
                        <p>
                            <strong>Description: </strong>
                            The practice of chanting Avalokitesvara is discussed. Thay teaches us how to 
                            chant and explains how during chanting we have the opportunity to practice 
                            understanding our own suffering. How we can touch the suffering inside so 
                            that we can allow compassion to arise so we can understand the suffering of 
                            the world, of our parents, of our ancestors.
                        </p>
                        <p>
                            <strong>Timecodes: </strong>
                            1, 2, 3, 4, 5, 6
                        </p>
                        <p>
                            <strong>Location: </strong>
                            Upper Hamlet, Plum Village
                        </p>
                        <p>
                            <strong>Date: </strong>
                            16/07/2012
                        </p>
                        <p>
                            <strong>Tags: </strong>
                            Dharmatalk, chanting, Avalokitesvara, music, children, adults
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Video;
