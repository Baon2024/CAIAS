//page for individual school
'use client';
//import { useRouter } from 'next/router';

const School = () => {
    // Access the dynamic route parameter (e.g., "id")
    //const router = useRouter();
    const { documentId } = router.query;  // This will be the dynamic segment value
  
    return (
      <div>
        <h1>School ID: {documentId}</h1>
        {/* You can fetch data using `id` or display dynamic content here */}
      </div>
    );
  };
  
  export default School;