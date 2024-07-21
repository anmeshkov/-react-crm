/* ----------------------------------------------------------------
  Product Select Component
---------------------------------------------------------------- */
import { courseNames } from "../../helpers/varibles";

const ProductSelect = ({filterByProduct, filter}) => {

  const handleProductChange = (event) => {
    filterByProduct(event.target.value);
  }

  const productList = courseNames.map((course) => {
    return (
      <option key={course.id} value={course.id}>{course.title}</option>
    )
  })

  return (
    <select onChange={handleProductChange} className="custom-select" id="productSelect" value={filter.product}>
      <option value="all">Все продукты</option>
      {productList}
    </select>
  );
};

export default ProductSelect;
