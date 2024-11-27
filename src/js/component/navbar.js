import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Add favorite</a></li>
    <li><a class="dropdown-item" href="#">Delete favorite</a></li>
  </ul>
</div>
				</Link>
			</div>
		</nav>
	);
};               //     <Link
//className="text-decoration-none text-dark"
//to={`/info/${type}/${id}/${img}`}
//>
//<p className="hover-effect p-2">{name}</p>
//</Link>
//<i
//className="fas fa-trash me-3 hover-delete"
//={(event) => {
  //actions.deleteFavorites(type, id);
//}}