import Navbar from './navbar';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1>Pablo Moreno-Rivera</h1>
      </div>
      <div className="header-right">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;