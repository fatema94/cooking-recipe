

const Header = () => {
    return (
        <div className="w-10/12 mx-auto">
   <div className="navbar flex justify-between bg-base-100">
  <div className="flex justify-between">
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div>
    <ul className='flex gap-8'>
        <li><a href="">Home</a></li>
        <li><a href="">Recipes</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Search</a></li>
      </ul>
    </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="" alt="" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;