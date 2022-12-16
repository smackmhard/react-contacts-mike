import { StyledContactCard, StyledImg, StyledButton } from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    
    <StyledContactCard >
      <div style={{ display: "flex" }}>
            <div>
                <StyledImg
                    src={profilePic}
                    alt={`Profile of ${firstName} ${lastName}.`}
                />
            </div>

            <div
                style={{
                    marginLeft: "20px",
                    marginBottom: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",

                }}
                    >
                <p>
                    {firstName} {lastName}
                </p>
                <p>{phoneNumber}</p>
            </div>

      </div>

            <StyledButton>
                <button style={{borderRadius: "50%", background: "#D9D9D9"}}>X</button>
            </StyledButton>
    </StyledContactCard>
  );
};

export default ContactCard;
