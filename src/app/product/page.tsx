import { useRouter } from 'next/router';
import React, { Suspense } from 'react';
import Param from './Param'; // Adjust the path as needed

interface SlugProps {
  searchparams: {
    slug?: string;
    username?: string;
  };
}

const Slug: React.FC<SlugProps> = () => {
  const router = useRouter();
  const { slug, username } = router.query;

  console.log({ slug, username });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Param />
      </Suspense>
    </>
  );
};

export default Slug;
