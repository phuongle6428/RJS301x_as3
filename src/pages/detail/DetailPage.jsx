import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Product from '../../components/product/Product'
import './detail.css'
import { useDispatch } from 'react-redux'
import { ADD_CART } from '../../redux/userSlice'

const dataURL = 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'

export default function DetailPage() {
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [mainImg, setMainImg] = useState('')
  const {_id} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
     async function getData() {
        try {
           const { data } = await axios.get(dataURL)
           const productData = data.find((value) => value._id.$oid === _id)
           setProduct(productData)
           setRelatedProduct(data.filter(value => value.category === productData.category))
        } catch (error) {
           alert('Server error')
        }
     }
     getData()
  }, [_id])
  if (product.length > 0) {
    return
  }
  const handleSetQuantity = (value) => {
    setQuantity(prev => {
      if (prev < 2 && value < 0) {
        return 1
      }
      return prev + value
    })
  }
  const handleAdd = () => {
    dispatch(ADD_CART({...product, quantity}))
  }
  return (
    <div className='detail-page container'>
      <div className='product-carousel'>
        <div className='side'>
          <img src={product.img1} alt="" onClick={(e) => setMainImg(e.target.src)} />
          <img src={product.img2} alt="" onClick={(e) => setMainImg(e.target.src)} />
          <img src={product.img3} alt="" onClick={(e) => setMainImg(e.target.src)} />
          <img src={product.img4} alt="" onClick={(e) => setMainImg(e.target.src)} />
        </div>
        <div className='main'>
          <img src={mainImg ? mainImg : product.img1 } alt="" />
        </div>
      </div>
      <div className='product'>
        <h2 className='title'>{product.name}</h2>
        <p className='price'>{new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(product.price)}</p>
        <p className='desc'>{product.short_desc}</p>
        <p className='cate'>Category: <span>{product.category}s</span></p>
        <div className='quantity'>
          <div className='info'>
          <label htmlFor="quantity">Quantity</label>
          <FontAwesomeIcon icon={faCaretLeft} onClick={() => handleSetQuantity(-1)} />
          <input type="text" size={1} value={quantity} disabled />
          <FontAwesomeIcon icon={faCaretRight} onClick={() => handleSetQuantity(1)} />
          </div>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>
      <div className='long-desc'>
        <button>Description</button>
        <h4 className='title'>Product Description</h4>
        <pre>{product.long_desc}</pre>
      </div>
      <div className='related-products'>
        <h4 className='title'>Related Products</h4>
        <div className='products-list'>
          {relatedProduct.map((value, index) => {
            return (
              <div className='product-item' key={index}>
                <Product data={value} clickDisable={false} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
