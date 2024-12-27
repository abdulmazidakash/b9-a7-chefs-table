import React from 'react';

const Sidebar = ({recipeQue, handleDelete, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {
	return (
		<div className='w-1/3 border-2 rounded-lg'>
			{/* want to cook table  */}
			<div className="overflow-x-auto">
				<h2 className='border-b-2 text-center font-semibold text-2xl text-gray-800 p-4'>Want To Cook: {recipeQue.length}</h2>
				<table className="table">
					{/* head */}
					<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Time</th>
						<th>Calories</th>
						<th>Preparing</th>
					</tr>
					</thead>
					<tbody>
					{recipeQue.map((recipe, index)=> 
					<tr className='hover' key={index}>
						<th>{index + 1}</th>
						<td>{recipe.recipe_name}</td>
						<td>{recipe.preparing_time} min</td>
						<td>{recipe.calories}</td>
						<td><button onClick={() =>
							{handleDelete(recipe.recipe_id) 
							calculateTimeAndCalories(recipe.preparing_time, recipe.calories)}
							} className="btn btn-sm rounded-badge badge-success mt-2 font-semibold">Preparing</button></td>
					</tr>)}
				
					</tbody>
				</table>
				</div>


			{/* preparing cook table  */}
			<div className="overflow-x-auto mt-8">
				<h2 className='border-b-2 text-center font-semibold text-2xl text-gray-800 p-4'>Currently Cooking: {preparedRecipe.length}</h2>
				<table className="table">
					{/* head */}
					<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Time</th>
						<th>Calories</th>

					</tr>
					</thead>
					<tbody>
					{preparedRecipe.map((recipe, index)=> 
					<tr className='hover' key={index}>
						<th>{index + 1}</th>
						<td>{recipe.recipe_name}</td>
						<td>{recipe.preparing_time} min</td>
						<td>{recipe.calories}</td>
					</tr>)}
					<tr className='hover'>
						<th></th>
						<td></td>
						<td>Total Time: {totalTime} min</td>
						<td>Total Calories: {totalCalories}</td>
					</tr>
				
					</tbody>
				</table>
				</div>
		</div>
	);
};

export default Sidebar;