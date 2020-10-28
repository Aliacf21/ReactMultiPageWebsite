
const CalculateTotal = ({value}) => (<p>1</p>)

const MyCard = ({title, text, price, link}) => {
    return (
    <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '36rem' }}>
      <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
          <div class="card-body">
              <div class="row align-items-center">  
                <div class="col-lg-10 align-items-center"><Example title={title} /> </div>

                <div class="col-lg-2 align-items-center">  
                  <Card.Title>{price}</Card.Title>
                </div>
       
              </div>
                <Card.Text>
                  <i>Made with {title} and fluffy dough</i>
                </Card.Text>
              </div>
      </div>);
  }

const Example = ({title}) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="light" size="lg" style={{backgroundColor: "white", color:"black", padding: 0}}><u>{title}</u></Button>

      <Modal show={show} onHide={handleClose} animation={true}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton style={{backgroundColor: "orange", color: "white", fontSize: "large"}}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
      <div class="row">    
        <div class="col-lg-7">
        <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
        </div>

        <div class="col-lg-5">

        <div class="row">
          <p>Glazing</p>
   

          <div class="row align-items-center">
            <div class="col-lg-6">
            
              <Button as="input" onClick = {() => console.log("I give up")} size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="None" />
        
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="Vanilla-Milk" />{' '}
            </div>
            </div>

          <div class="row my-2 align-items-center">
         <div class="col-lg-6">
              <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="Sugar-Milk" />
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="Double" />{' '}
            </div>
          </div>
          </div>

  

        <div class="row align-items-center my-4"> <p>Quantity</p>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="1" />
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="2" />{' '}
            </div>
            </div>

          <div class="row my-2 align-items-center">
         <div class="col-lg-6">
              <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="6" />
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="12" />{' '}
            </div>
          </div>  

 

          </div>

        </div>
   
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" style={{color: "black"}} onClick={handleClose}>
            Continue Browsing
          </Button>
          <Button variant="outline-light" style={{color: "white", backgroundColor: "orange"}} onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal></>
  );
}