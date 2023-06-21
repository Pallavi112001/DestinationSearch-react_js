// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationInfo} = props
  const {imgUrl, name} = destinationInfo
  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="description">{name}</p>
    </li>
  )
}
export default DestinationItem
