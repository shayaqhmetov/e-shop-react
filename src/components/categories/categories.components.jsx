import Category from "../category/category.component";

import './categories.styles.scss';

const categories = require("../../fixtures/categories.json");

function Categories() {
    return (
        <div className='categories-container'>
            {
                categories.map((category) => (
                    <Category category={category} key={category.id} />
                ))
            }
        </div>
    );
}

export default Categories;