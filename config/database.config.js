if (process.env.NODE_ENV === 'production'){
    let url = 'mongodb://root:root@ds111410.mlab.com:11410/orders';
    module.exports = {url};

}
else{
  let url=  'mongodb://localhost:27017/airbono';
  module.exports = {url};
}
