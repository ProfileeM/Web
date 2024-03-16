import "../assets/css/component/CreateNum.css";

const CreateNum = ({ num }) => {
  return (
    <div className="create-num">
      <h2 className="present-num">{num}</h2>
      <h5> / 8</h5>
    </div>
  );
};

export default CreateNum;
