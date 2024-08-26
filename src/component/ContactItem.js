import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'


const ContactItem = ({ item, idx, deleteItem, keyword }) => {
  const { name, phoneNumber } = item;

  return (
    <div className='item-box'>
      <Row>
        <Col lg={2}>
          <img width={50} src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" />
        </Col>
        <Col lg={10}>
          <div className='item-content'>
            <div>{name}</div>
            <div>{phoneNumber}</div>
            {keyword === ""
              ?
              <Button className='item-close' size="sm" variant="outline-secondary" onClick={() => deleteItem(idx)}>X</Button>
              :
              <></>
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
