import React, { useState } from 'react'
import useApi from '../../hooks/useApi'
import deliveryService from '../../services/deliveryService'
import { useParams } from 'react-router-dom'
import { Card, ListGroup, Badge, Button, Modal, Container } from 'react-bootstrap'
import env from '../../configs/env'
import { formatPrice } from '../../utils/formatPrice'
import MapRoute from '../../components/Map/MapRoute'

const DetailDelivery = () => {
  const { id } = useParams()



  const { data: dataDelivery } = useApi(
    deliveryService.getDetailDelivery,
    true,
    id
  )
  const delivery = dataDelivery?.delivery
  const [showMapRoute, setShowMapRoute] = useState(false);

  function handleShowMapRoute() {
    setShowMapRoute(true);
  }


  return (
    <div className="container mt-3">
      {delivery && (
        <Card className="border-0 shadow-sm">
          {/* Thông tin đơn hàng */}
          <Card.Header className="bg-light fw-bold">
            Thông tin đơn hàng
          </Card.Header>
          <Card.Body>
            <p><strong>Mã đơn:</strong> {delivery._id}</p>
            <p><strong>Tên người nhận:</strong> {delivery.name}</p>
            <p><strong>SĐT:</strong> {delivery.phone_number}</p>
            <p><strong>Email:</strong> {delivery.email}</p>
            <p>
              <strong>Địa chỉ:</strong>{' '}
              {[delivery.address_detail, delivery.ward_name, delivery.district_name, delivery.province_name]
                .filter(Boolean)
                .join(', ')}
            </p>
          </Card.Body>

          {/* Danh sách sản phẩm */}
          <Card.Header className="bg-light fw-bold">
            Sản phẩm
          </Card.Header>
          <ListGroup variant="flush">
            {delivery?.order_items?.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex align-items-center gap-3"
              >
                <img
                  src={`${env.VITE_SERVER_BASE_URL}/${item.img}`}
                  alt={item.product_name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <div className="flex-grow-1">
                  <div className="fw-bold">
                    {item.product_name} {item.variant_name}{' '}
                    <Badge bg="secondary">{item.color}</Badge>
                  </div>
                  <div className="text-muted small">x{item.quantity}</div>
                </div>
                <div className="text-danger fw-bold">
                  {formatPrice(item.price)}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Tổng tiền */}
          <Card.Footer className="text-end">
            <span className="fw-bold">Tổng tiền: </span>
            <span className="text-danger fs-5 fw-bold">
              {formatPrice(delivery.amount)}
            </span>
            <div className='d-flex gap-1'>
              <Button className='btn btn-secondary'>Quay lại</Button>
              <Button className='btn btn-warning' onClick={() => handleShowMapRoute()}>Xem bản đồ</Button>
              <Button className='btn btn-primary'>Đường đi</Button>
              <Button className='btn btn-success'>Giao hàng</Button>
            </div>
          </Card.Footer>
        </Card>
      )}

      <Modal show={showMapRoute} fullscreen='xxl-down' onHide={() => setShowMapRoute(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Bản đồ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MapRoute  destination={[delivery?.lng, delivery?.lat]}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DetailDelivery
