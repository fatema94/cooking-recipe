
const Banner = () => {
    return (
        <div className='w-10/12 mx-auto'>
     <div className="hero hero-overlay rounded-3xl min-h-[500px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnN8ZW58MHx8MHx8fDA%3D)'}}>
  <div className="hero-overlay rounded-3xl bg-opacity-50"></div>
  <div className=" text-center text-white">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl font-bold">Jaw-Dropping Recipe Website Design Example</h1>
      <p className="mb-5">This recipe blog includes some beautiful photography. The blog sports a custom-built theme, and it loads quickly.
       The blog posts are easy to read, which makes it enjoyable for visitors to find recipes that interest them.</p>
       <div className=''>
      <button className="btn border-none bg-green-400 rounded-full font-bold">Explore Now</button>
      <button className='border p-2 rounded-full m-4'>Our Feedback</button>
      <button></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;