import React from "react";




// function OneProduct (itemList) {
//     //  const abc = itemList[0]
//     // console.log(itemList[0])
//     const item1 = itemList.map( (blah) => {
//         return blah;
//      });

//     }

function StarRating(stars) {
  // console.log(stars)
  let x=0;
  let starnum = [];
  while ( x < stars ) {
    x++;
    starnum.push(<span key={x} className="glyphicon glyphicon-star" />);
  }
  return starnum;

// return starnum;
} // end of fucntion


function ProductDetail(props) {

  return (

    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.item.imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.item.price}</h4>
          <h4><a href="#">{props.item.name}</a>
          </h4>
          <p>{props.item.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.item.reviews} reviews</p>

          <div> { StarRating(props.item.rating) }</div>
          <button type="button" onClick={
              (e) => {
                // console.log(props);
              //  alert (e.target.value);
              props.inCrease1();
                // return props.state.numberOfItemsInCart++;
                }
              }> add to cart </button>
        </div>
      </div>
    </div>


  );
}

export default ProductDetail;
