

const TotalCost = (currentItems) => {
  let price = 0;
  let i;
  for (i=0;i<(currentItems.length);i++){
    price = price + ((currentItems[i]['item']['cost'])*currentItems[i]['quantity'])
  }
  return(
    price
  )
}

export default TotalCost;
