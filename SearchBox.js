import React from 'react';

const SearchBox=({searchfield,SearchChange}) => {
	return  (
		<div className='pa2'>
<input
className='pa3 ba b--green bg-yellow' 
type='search'
 placeholder='search robots'
onChange={SearchChange}
/>
</div>
		);
}
export default SearchBox;
