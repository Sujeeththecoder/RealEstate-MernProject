import React from 'react';

export default function OAuth() {
    const handleGoogleClick = async () => {
        try {
            // Add your Google sign-in logic here
        } catch (error) {
            console.log('could not sign-in', error);
        }
    };

    return (
        <button
            onClick={handleGoogleClick}
            type='button'
            className='bg-red-800 text-white p-3 rounded-lg uppercase hover:opacity-95'
        >
            Continue With Google
        </button>
    );
}
