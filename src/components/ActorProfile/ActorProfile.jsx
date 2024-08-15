import "./ActorProfile.css";

const ActorProfile = ({actor}) => {
  return (
    <div className="actor__block">
      <img className="actor__pic" src={actor} alt="actor_pic" />
    </div>
  );
};

export default ActorProfile;
