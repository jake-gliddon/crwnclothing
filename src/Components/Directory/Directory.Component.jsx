import CategoriesComponent from "../categories-component/Categories.component";
import categories from './categories.json'
import './directory.styles.scss'

const Directory = () => {
  return (
    <section className="directory-container">
    {categories.map((category) => (
      <CategoriesComponent key={category.id} category={category} />

      ))}
    </section>
  );
}

export default Directory;

