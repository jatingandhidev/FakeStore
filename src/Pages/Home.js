import Card from '../Components/Card'
import { useGlobalContext } from '../context'

const Home = () => {
  const { data } = useGlobalContext()
  return (
    <>
      {/* Header Slider */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner  " style={{ maxHeight: '100vh' }}>
          <div className="carousel-item active">
            <img
              src="https://wallpapers.com/images/hd/high-resolution-black-background-j5zkhfwgqgsw2olf.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpapers.com/images/hd/high-resolution-black-background-j5zkhfwgqgsw2olf.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpapers.com/images/hd/high-resolution-black-background-j5zkhfwgqgsw2olf.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Cards */}
      <div className="container mx-auto mt-4">
        <div className="row">
          {data.map((item) => {
            if (
              item.category !== 'electronics' &&
              item.category !== 'jewelery'
            ) {
              return <Card key={item.id} data={item} />
            }
            return null
          })}
        </div>
      </div>
    </>
  )
}
export default Home
