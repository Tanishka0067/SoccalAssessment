import React from 'react';

const CategoryBar = () => {
  return (
    <div className='flex flex-wrap justify-between items-center px-10 p-4 bg-gray-100/90'>
      <div className='flex flex-wrap gap-5 font-normal text-sm'>
        <div><button>Movies</button></div>
        <div><button>Streams</button></div>
        <div><button>Events</button></div>
        <div><button>Plays</button></div>
        <div><button>Sports</button></div>
        <div><button>Activities</button></div>
      </div>
      <div className='flex flex-wrap gap-5 font-light text-xs mt-2 md:mt-0'>
        <div><button>ListYourShow</button></div>
        <div><button>Corporates</button></div>
        <div><button>Offers</button></div>
        <div><button>Gift Cards </button></div>
      </div>
    </div>
  );
}

export default CategoryBar;
