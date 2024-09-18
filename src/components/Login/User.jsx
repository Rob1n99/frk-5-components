const User = ({ onUserChange }) => {
  const onUserComplete = (e) => {
    onUserChange(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        User
        <input type="text" placeholder="username" onBlur={onUserComplete} />
      </div>
    </>
  );
};

export default User;
