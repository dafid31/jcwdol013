import { Card, Col, Container, Row ,Image } from "react-bootstrap"
import allImage from "../assets/image/update/all-anime.jpg"
import maouImage from "../assets/image/update/maou gakuin no fute.jpg"
import kenjaImage from "../assets/image/update/kenja no mago.jpg"
import mashleImage from "../assets/image/update/mashle.jpg"


const Update = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-dark ">Update Anime</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="update">
                        <Card className="movieImage ">
                            <Image src={allImage} alt="Tensura Anime" className="Images" />
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
                            <Image src={kenjaImage} alt="bokuno Anime" className="Images" />
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
                            <Image src={maouImage} alt="classroom Anime" className="Images" />
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
                            <Image src={mashleImage} alt="classroom Anime" className="Images" />
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
                            <Image src={kenjaImage} alt="classroom Anime" className="Images" />
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
                            <Image src={allImage} alt="classroom Anime" className="Images" />
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

export default Update