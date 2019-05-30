module.exports = function main(inputs) {
  let price;
  let transfee = 0.8;
  let parktime = 0.25;
    if(inputs.distance <= 2 && inputs.parkTime){
      price = Math.round(6 + inputs.parkTime * parktime);
      return price;
    } else if(inputs.distance > 2 && inputs.distance <= 8 && inputs.parkTime){
      price = Math.round(6 + (inputs.distance - 2) * transfee + inputs.parkTime * parktime);
      return price;
    }else if(inputs.distance > 8 && inputs.parkTime){
      price = Math.round(6 + (8 - 2) * transfee + (inputs.distance - 8) * (transfee/2 + transfee) + inputs.parkTime * parktime);
      return price;
    } else if(inputs.distance > 8){
      price = Math.round(6 + (8 - 2) * transfee + (inputs.distance - 8) * (transfee/2 + transfee));
      return price;
    }
    return "price";
};
