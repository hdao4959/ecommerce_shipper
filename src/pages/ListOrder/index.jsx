import React from 'react'
import { Button, Card, Form, InputGroup, Table } from 'react-bootstrap'
import Paginate from '../../components/Paginate'

const ListOrder = () => {
  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold text-primary mb-0">📦 Danh sách đơn hàng cần giao</h5>
          <Form.Select
            aria-label="Lọc trạng thái"
            style={{ maxWidth: '200px' }}
            size="sm"
          >
            <option>Tất cả trạng thái</option>
            <option value="1">Chờ giao</option>
            <option value="2">Đang giao</option>
            <option value="3">Hoàn thành</option>
            <option value="4">Mới nhất</option>
            <option value="5">Cũ nhất</option>
          </Form.Select>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Form.Select
            aria-label="Lọc số lượng"
            style={{ maxWidth: '200px', marginRight: '10px' }}
            // size="sm"
          >
            <option>Số lượng</option>
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">50</option>
          </Form.Select>
          <InputGroup  style={{ maxWidth: '500px',
            minWidth: '300px'
           }}>
            <InputGroup.Text id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Tìm kiếm đơn hàng..."
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>

        <div className="table-responsive">
          <Table striped bordered hover responsive="sm">
            <thead className="table-light">
              <tr className='text-center'>
                <th>#</th>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>SĐT</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td>1</td>
                <td>DH001</td>
                <td>Nguyễn Văn A</td>
                <td>0901234567</td>
                <td>Hà Nội</td>
                <td><span className="badge bg-warning text-dark">Chờ giao</span></td>
                <td>
                  <Button size="sm" variant="info" className="me-2">Xem</Button>
                  <Button size="sm" variant="success" className="me-2">Giao</Button>
                  <Button size="sm" variant="danger">Hủy</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="d-flex justify-content-center">
          <Paginate />
        </div>
      </Card.Body>
    </Card>
  )
}

export default ListOrder
