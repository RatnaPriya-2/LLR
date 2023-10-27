import HeroImage from "../../../assets/Logo.svg";
export default function Heading() {
  return (
    <header className="reserve-table">
      
      <div className="reserve-header-text">
        <h1>Menu</h1>
      </div>
      <div class="page-image">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      </div>
    </header>
  );
}