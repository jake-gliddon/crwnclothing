import './categories.styles.scss'

const CategoriesComponent = ({category}) => {
    const {title, imageUrl} = category
  return (
      <section className="category-container">
        <img class='background-image' src={imageUrl} />
        <section className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </section>
      </section>

      
  );
}

export default CategoriesComponent;

