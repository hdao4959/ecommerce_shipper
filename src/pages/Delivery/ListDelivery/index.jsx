import React from 'react'
import { Button, Card, Form, InputGroup, Table } from 'react-bootstrap'
import useApi from '../../../hooks/useApi'
import deliveryService, { DELIVERY_STATUS } from '../../../services/deliveryService'
import { formatPrice } from '../../../utils/formatPrice'

const ListDelivery = () => {

  const { data: dataDeliveries } = useApi(deliveryService.getListDelivery, true)

  return (
    <Card className="shadow-sm border-0" >
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
          <InputGroup style={{
            maxWidth: '500px',
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

        <div className='row row-cols-1 row-cols-md-2'>
          {
            dataDeliveries?.deliveries && dataDeliveries.deliveries.map((item, index) => (
              <Card className='col' key={index}>
                {/* <Card.Img variant="top" src="/icons/image512.png" /> */}
                <Card.Body>
                  <Card.Title>Đơn hàng {item._id}</Card.Title>
                  <div>
                    <p>Tên:{item?.name}</p>
                    <p>SĐT:{item?.phone_number}</p>
                    <p>Địa chỉ:{[item?.address_detail, item?.ward_name, item?.district_name, item?.province_name].join(', ')}</p>
                    <p>Ghi chú: {item?.note}</p>
                    <p>{formatPrice(item?.amount)}</p>

                  </div>


                  <div className='d-flex gap-1'>
                    <Button variant="info">Chi tiết</Button>
                    <Button variant="primary">Xem map</Button>
                    <Button variant="success">Giao hàng</Button>
                    <Button variant="danger">Hoàn hàng</Button>
                  </div>
                </Card.Body>

              </Card>
            ))
          }
        </div>
      </Card.Body>
    </Card>
  )
}

export default ListDelivery
