import './categories.styles.scss'

const App = () => {

  const categories = [
    {
      title: 'Hats'
    },
    {
      title: 'Jackets'
    },
    {
      title: 'Trainers'
    },
    {
      title: 'Womens'
    },
    {
      title: 'Mens'
    },
  ]
  return (
    <section className="categories-container">
    {categories.map(({title}) => (
      <section className="category-container">
        <section className="bgimg" />
        <section className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </section>
      </section>

    ))}
      
    </section>
  );
}

export default App;

