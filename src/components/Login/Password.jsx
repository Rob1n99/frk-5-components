const Password = ({ onPasswordChange }) => {
  const onPasswordComplete = (e) => {
    onPasswordChange(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        Password
        <input type="password" onBlur={onPasswordComplete} />
      </div>
    </>
  );
};

export default Password;
