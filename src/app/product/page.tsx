
// import axios from 'axios'
import Productdetails from './productdetails'
import Data from './data'
import Param from './param'
import { Suspense } from 'react'


const Slug = async ({ searchparams }) => {
  console.log(searchparams); // Log the search params to the console

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}> {/* Display loading indicator */}
        <Param /> {/* Render the Param component */}
      </Suspense>
    </>
  );
};

export default Slug;
