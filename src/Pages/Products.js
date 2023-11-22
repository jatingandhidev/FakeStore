import Card from '../Components/Card'
const count = [1, 2, 3, 4, 5, 6]

const Products = () => {
  return (
    <div
      class="container mx-auto"
      style={{
        marginTop: '72px',
        minHeight: `calc(100vh - 500px)`,
        paddingTop: '30px',
      }}
    >
      <div class="row">
        {count.map((index) => {
          return <Card />
        })}
      </div>
    </div>
  )
}
export default Products
