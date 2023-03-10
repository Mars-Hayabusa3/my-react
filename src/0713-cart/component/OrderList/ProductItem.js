function ProductItem(props) {
  //  每個商品物件
  // {
  //   id:1,
  //   name:'咖啡色 T-shirt',
  //   category: 'Shirt',
  //   image:'https://i.imgur.com/1GrakTl.jpg',
  //   price:300
  // }

  const { id, name, category, image, price } = props

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{category}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a href="#/">-</a>
            <a href="#/" className="border">
              1
            </a>
            <a href="#/">+</a>
          </div>
          <div className="col">
            ${price} <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem

{
  /* <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/1GrakTl.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">咖啡色 T-shirt</div>
            </div>
            <div className="col">
              <a href="#/">-</a>
              <a href="#/" className="border">
                1
              </a>
              <a href="#/">+</a>
            </div>
            <div className="col">
              $300 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/ba3tvGm.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">白色 T-shirt</div>
            </div>
            <div className="col">
              <a href="#/">-</a>
              <a href="#/" className="border">
                1
              </a>
              <a href="#/">+</a>
            </div>
            <div className="col">
              $200 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/pHQ3xT3.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">黑色 T-shirt</div>
            </div>
            <div className="col">
              <a href="#sec" onClick={() => {}}>
                -
              </a>
              <a href="#sec" className="border">
                1
              </a>
              <a href="#sec">+</a>
            </div>
            <div className="col">
              $450 <span className="close">&#10005;</span>
            </div>
          </div>
        </div> */
}
