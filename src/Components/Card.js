const Card = () => {
  return (
    // <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 position-relative mb-5">
    //   <div
    //     class="card top-50 start-50 translate-middle bg-dark bg-gradient"
    //     style={{ width: '18rem', color: 'white' }}
    //   >
    //     <img
    //       src="https://i.imgur.com/ZTkt4I5.jpg"
    //       class="card-img-top"
    //       alt="..."
    //     />
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <h6 class="card-subtitle mb-2" style={{ color: 'lightgrey' }}>
    //         Card subtitle
    //       </h6>
    //       <p class="card-text">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <a href="#" class="btn mr-2 btn-light btn-lg btn-floating fs-6">
    //         <i class="fas fa-link"></i> Visit Site
    //       </a>
    //       {/* <a href="#" class="btn btn-light btn-lg btn-floating mx-2 fs-6">
    //         <i class="fab fa-github"></i> Github
    //       </a> */}
    //     </div>
    //   </div>
    // </div>
    <div
      class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 position-relative"
      style={{ marginTop: '150px', marginBottom: '100px' }}
    >
      <div
        class="card top-50 start-50 translate-middle bg-dark bg-gradient"
        style={{ width: '18rem', color: 'white', position: 'relative' }}
      >
        <img
          src="https://i.imgur.com/ZTkt4I5.jpg"
          class="card-img-top"
          style={{
            width: '288px',
            height: '288px',
            background: 'red',
            margin: 'auto',
            zIndex: '100',
            position: 'absolute',
            top: '-144px',

            borderRadius: '50%',
            backgroundImage: "url('https://i.imgur.com/ZTkt4I5.jpg')",
            backgroundSize: 'cover',
            border: '2px solid white',
          }}
          alt="..."
        />
        <div className="circle"></div>
        <div class="card-body" style={{ marginTop: '144px' }}>
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2" style={{ color: 'lightgrey' }}>
            Card subtitle
          </h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn mr-2 btn-light btn-lg btn-floating fs-6">
            <i class="fas fa-link"></i> Visit Site
          </a>
        </div>
      </div>
    </div>
  )
}
export default Card
