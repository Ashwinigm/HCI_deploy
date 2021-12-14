import React, { useState } from 'react'
import Navbar from './Navbar'
import Navigation from './navigation/Navigation'
import { Card, CardGroup } from 'react-bootstrap'

const Home = () => {
  //changes the title of the page
  if (document.getElementById('pageTitle')) {
    document.getElementById('pageTitle').innerHTML = '4List - Home Page'
  }

  return (
    <div className="mt-2">
      {/* <Navigation/> */}
      {/* <Navbar/> */}
      <div className="container-xxl">
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'}}>
        
                <Card className="" style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                  <Card.Link className='link-dark ms-2' href="#">
                      <Card.Title>
                    For Sale
                    </Card.Title>
                    </Card.Link>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link className='link-dark ms-2' href="/listing">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                  <Card.Link className='link-dark ms-2' href="#">
                      <Card.Title>
                    Personal
                    </Card.Title>
                    </Card.Link>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link className='link-dark ms-2' href="/personal">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                  <Card.Link className='link-dark ms-2' href="#">
                      <Card.Title>
                    Housing
                    </Card.Title>
                    </Card.Link>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link className='link-dark ms-2' href="/listing">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />
             
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card className="" style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                  <Card.Link className='link-dark ms-2' href="#">
                      <Card.Title>
                    Jobs
                    </Card.Title>
                    </Card.Link>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link className='link-dark ms-2' href="/jobs">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                  <Card.Link className='link-dark ms-2' href="#">
                      <Card.Title>
                    Community
                    </Card.Title>
                    </Card.Link>
                  </Card.Header>
                  <Card.Body style={{ overflow: 'auto' }}>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link className='link-dark ms-2' href="/community">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                  <Card.Link className='link-dark ms-2' href="#">
                      <Card.Title>
                    Events
                    </Card.Title>
                    </Card.Link>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="/event/7">Crafting</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="/event/2">Shen Yun</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link className='link-dark ms-2' href="/event/6">Soccer</Card.Link>
                    </Card.Text>
                    <Card.Link className='link-dark ms-2' href="/event">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />
             </div>
          <footer style={{marginTop: '20rem', textAlign: 'center'}}>HCI Class SFSU CS Dept. Fall 2021 Team 4</footer>
          </div>
        </div>
  )
}

export default Home
