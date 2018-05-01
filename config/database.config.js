if (process.env.NODE_ENV === 'production'){
    let url = 'your url';
    module.exports = {url};

}
else{
  let url=  'mongodb://localhost:27017/order-management';
  module.exports = {url};
}
