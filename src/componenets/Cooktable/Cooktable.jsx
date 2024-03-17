
import PropTypes from 'prop-types'
import Recipe from '../Recipe/Recipe'
const Cooktable = ({cooktable}) =>{
    return(
        <div className="md:w-1/3 border rounded-2xl p-4 m-4">
            <h2 className="font-bold text-center text-2xl m-6 border-b">Want to Cook : {cooktable.length}</h2>
            <div className="flex gap-12 m-4">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {
                cooktable.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
             <h2 className="font-bold text-center text-2xl m-6 border-b"> Currently Cooking: {cooktable.length}</h2>
        </div>
    )
}
Cooktable.propTypes = {
    cooktable : PropTypes.array
}

export default Cooktable