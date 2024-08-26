import React, { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const SearchBox = ({ allItem }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <div className='search-box'>
      <Form onSubmit={searchByName}>
        <Row>
          <Col lg={6}>
            <Form.Control type="text" placeholder="이름을 입력하세요"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Col>
          <Col lg={2}>
            <Button variant="primary" type="submit" >
              찾기
            </Button>
          </Col>
          <Col lg={4}>
            <Button variant="primary" type="button" onClick={allItem} >
              전체보기
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default SearchBox
