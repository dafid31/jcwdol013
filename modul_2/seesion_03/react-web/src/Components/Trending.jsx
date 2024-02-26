import { Card, Col, Container, Row ,Image } from "react-bootstrap"
import tensuraImage from "../assets/image/trending/tensura.jpg"
import bokunoImage from "../assets/image/trending/boku no hero academia.jpg"
import classroomImage from "../assets/image/trending/classroom elite.jpg"
import arifuretImage from "../assets/image/trending/arifuretra.jpg"
import opmImage from "../assets/image/trending/one punch man .jpg"
import tateImage from "../assets/image/trending/tate no yuusha.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white ">Trending Anime</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage ">
                            <Image src={tensuraImage} alt="Tensura Anime" className="Images" />
                            <div className="bg-dark text-white">
                            <div className="p-2 m-1">
                            <Card.Title className="text-center"> Tensei Shitara Slime Datta Ken </Card.Title>
                            <Card.Text className="text-left">
                                Sinopsis Singkat
                            </Card.Text>
                            <Card.Text className="text-left "> Last Updated 2 hours ago</Card.Text>
                            </div>
                            </div>

                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage ">
                            <Image src={bokunoImage} alt="bokuno Anime" className="Images" />
                            <div className="bg-dark text-white">
                            <div className="p-2 m-1">
                            <Card.Title className="text-center"> Tensei Shitara Slime Datta Ken </Card.Title>
                            <Card.Text className="text-left">
                                Sinopsis Singkat
                            </Card.Text>
                            <Card.Text className="text-left "> Last Updated 2 hours ago</Card.Text>
                            </div>
                            </div>

                        </Card>
                    </Col>
                    <Col md ={4} className="movieWrapper">
                        <Card className="movieImage ">
                            <Image src={classroomImage} alt="classroom Anime" className="Images" />
                            <div className="bg-dark text-white">
                            <div className="p-2 m-1">
                            <Card.Title className="text-center"> Tensei Shitara Slime Datta Ken </Card.Title>
                            <Card.Text className="text-left">
                                Sinopsis Singkat
                            </Card.Text>
                            <Card.Text className="text-left "> Last Updated 2 hours ago</Card.Text>
                            </div>
                            </div>

                        </Card>
                    </Col>
                    <Col md ={4} className="movieWrapper">
                        <Card className="movieImage ">
                            <Image src={opmImage} alt="classroom Anime" className="Images" />
                            <div className="bg-dark text-white">
                            <div className="p-2 m-1">
                            <Card.Title className="text-center"> Tensei Shitara Slime Datta Ken </Card.Title>
                            <Card.Text className="text-left">
                                Sinopsis Singkat
                            </Card.Text>
                            <Card.Text className="text-left "> Last Updated 2 hours ago</Card.Text>
                            </div>
                            </div>

                        </Card>
                    </Col>
                    <Col md ={4} className="movieWrapper">
                        <Card className="movieImage ">
                            <Image src={tateImage} alt="classroom Anime" className="Images" />
                            <div className="bg-dark text-white">
                            <div className="p-2 m-1">
                            <Card.Title className="text-center"> Tensei Shitara Slime Datta Ken </Card.Title>
                            <Card.Text className="text-left">
                                Sinopsis Singkat
                            </Card.Text>
                            <Card.Text className="text-left "> Last Updated 2 hours ago</Card.Text>
                            </div>
                            </div>

                        </Card>
                    </Col>
                    <Col md ={4} className="movieWrapper">
                        <Card className="movieImage ">
                            <Image src={arifuretImage} alt="classroom Anime" className="Images" />
                            <div className="bg-dark text-white">
                            <div className="p-2 m-1">
                            <Card.Title className="text-center"> Tensei Shitara Slime Datta Ken </Card.Title>
                            <Card.Text className="text-left">
                                Sinopsis Singkat
                            </Card.Text>
                            <Card.Text className="text-left "> Last Updated 2 hours ago</Card.Text>
                            </div>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Trending