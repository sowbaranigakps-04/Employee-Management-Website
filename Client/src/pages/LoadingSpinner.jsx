// // LoadingSpinner.js/// blue circle loading
// import React from 'react';

// const LoadingSpinner = () => (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#4f46e5">
//             <circle cx="50" cy="50" r="45" stroke-width="10" stroke="#e0e7ff" fill="none"/>
//             <circle cx="50" cy="50" r="45" stroke-width="10" stroke="#4f46e5" fill="none" 
//                     stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="75">
//                 <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/>
//             </circle>
//         </svg>
//     </div>
// );

// export default LoadingSpinner;

//// pulsating bouble
// LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="50" r="10" fill="#4f46e5">
                <animate attributeName="cy" values="50;10;50;90;50" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="10" fill="#4f46e5">
                <animate attributeName="cy" values="50;10;50;90;50" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="75" cy="50" r="10" fill="#4f46e5">
                <animate attributeName="cy" values="50;10;50;90;50" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    </div>
);

export default LoadingSpinner;


/// rotating squares

// // LoadingSpinner2.js
// import React from 'react';

// const LoadingSpinner = () => (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//             <rect x="15" y="15" width="20" height="20" fill="#4f46e5">
//                 <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1.5s" repeatCount="indefinite" />
//             </rect>
//             <rect x="35" y="35" width="20" height="20" fill="#4f46e5">
//                 <animateTransform attributeName="transform" type="rotate" from="0 45 45" to="360 45 45" dur="1.5s" repeatCount="indefinite" />
//             </rect>
//             <rect x="55" y="55" width="20" height="20" fill="#4f46e5">
//                 <animateTransform attributeName="transform" type="rotate" from="0 65 65" to="360 65 65" dur="1.5s" repeatCount="indefinite" />
//             </rect>
//         </svg>
//     </div>
// );

// export default LoadingSpinner;


// LoadingSpinner5.js
// import React from 'react';

// const LoadingSpinner5 = () => (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//             <path fill="#4f46e5" d="M20,50c0-11.046,8.954-20,20-20s20,8.954,20,20-8.954,20-20,20S20,61.046,20,50z">
//                 <animate attributeName="d" values="M20,50c0-11.046,8.954-20,20-20s20,8.954,20,20-8.954,20-20,20S20,61.046,20,50z; M20,50c0-8.066,6.934-15,15-15s15,6.934,15,15-6.934,15-15,15S20,58.066,20,50z; M20,50c0-11.046,8.954-20,20-20s20,8.954,20,20-8.954,20-20,20S20,61.046,20,50z" dur="1.5s" repeatCount="indefinite" />
//             </path>
//         </svg>
//     </div>
// );

// export default LoadingSpinner5;


// LoadingSpinnerWithText.js
