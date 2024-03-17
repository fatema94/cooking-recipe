import PropTypes from 'prop-types';
const Recipe = ({recipe}) => {
    const {recipe_name , recipe_id , preparing_time, calories} = recipe;
    return (
        <div className='p-2 bg-slate-100 m-4'> 
            <div className='flex'>
            <p className='font-bold'>{recipe_id}.</p>
            <h3 className='font-semibold'> {recipe_name}</h3>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className='bg-green-400 rounded-full px-2 font-semibold'>Preparing</button>
            </div>

        </div>
    );
};
Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}

export default Recipe;