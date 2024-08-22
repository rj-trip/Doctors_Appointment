const Footer = () => {
  const year = new Date().getFullYear();

  return <footer
  theme="light"
      mode="horizontal"
      style={{ display: "flex", justifyContent: "center" , backgroundColor:"black",color:"white",position:"fixed",
        bottom:"0",
        width:"100%",height:"30px"}}>
    {`Copyright ©${year}`}
    </footer>;
};

export default Footer;