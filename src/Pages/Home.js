import Card from '../Components/Card'
import { useGlobalContext } from '../Context API/context'

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

        <div className="carousel-inner" style={{ height: '100vh' }}>
          <div
            className="carousel-item active"
            style={{ position: 'relative' }}
          >
            <img
              src={process.env.PUBLIC_URL + '/imgs/Black.jpg'}
              className="d-block w-100"
              style={{ height: '100vh' }}
              alt="First Slide"
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/imgs/img1.jpg'}
                alt="1"
                className="img-fluid rounded "
                style={{ height: '90%', width: '90%' }}
              />
            </div>
          </div>
          <div
            className="carousel-item active"
            style={{ position: 'relative' }}
          >
            <img
              src={process.env.PUBLIC_URL + '/imgs/Black.jpg'}
              className="d-block w-100"
              style={{ height: '100vh' }}
              alt="First Slide"
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/imgs/img2.webp'}
                alt="2"
                className="img-fluid rounded "
                style={{ height: '90%', width: '90%' }}
              />
            </div>
          </div>
          <div
            className="carousel-item active"
            style={{ position: 'relative' }}
          >
            <img
              src={process.env.PUBLIC_URL + '/imgs/Black.jpg'}
              className="d-block w-100"
              style={{ height: '100vh' }}
              alt="First Slide"
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/imgs/img3.jpg'}
                alt="3"
                className="img-fluid rounded "
                style={{ height: '90%', width: '90%' }}
              />
            </div>
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
