function Footer() {
  function addNewPost() {
    console.log('clicked');
  }
  return (
    <footer>
      <div className="footer-container">
        <button className="footer-button" onClick={addNewPost}>New Post</button>
      </div>
    </footer>
  );
}

export default Footer;
