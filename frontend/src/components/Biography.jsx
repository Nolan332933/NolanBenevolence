import PropTypes from "prop-types";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="Who we are" />
      </div>
      <div className="content">
        <p>Biography</p>
        <h3>Who I am</h3>
        <p>I am Nolan from Myanmar.</p>
        <p>I am all in since 2023!</p>
        <p>I am always working on a MERN project.</p>
        <p>Feel free to talk to me.</p>
        <p>Viva La Vida</p>
        <p>Coding is fun!</p>
      </div>
    </div>
  );
};

Biography.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Biography;
