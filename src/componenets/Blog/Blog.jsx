import PropTypes from 'prop-types';
import { CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Blog = ({blog , handleToCookTable}) => {
    const{recipe_name , recipe_image , short_description , ingredients , preparing_time, calories} = blog;
    return (
        <div className='m-6 p-6 border rounded-2xl shadow-xl'>
            <img className='w-38 rounded-2xl'  src={recipe_image} alt="" />
            <h2 className="text-2xl font-bold">{recipe_name}</h2>
            <p className='border-b'>{short_description}</p>
            <p>Ingredients : {ingredients.length}</p>
            <ol className='border-b'>
                <li>{ingredients}</li>
            </ol>
            <div className='flex justify-between'>
                <div className='flex'>
                    <button><CiStopwatch /></button>
                    <p>{preparing_time}</p>
                </div>
                <div className='flex'>
                    <button><FaFire /></button>
                    <p>{calories}</p>
                </div>

            </div>
            <button onClick={() => handleToCookTable(blog)} className='bg-green-400 rounded-3xl px-4 p-2 m-4 font-semibold'>Want to cook</button>
        </div>
    );
};
Blog.PropTypes ={
    blog : PropTypes.object.isRequired,
    handleToCookTable: PropTypes.func
}
export default Blog;