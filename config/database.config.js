if (process.env.NODE_ENV === 'production'){
    let url = 'Your url';
    module.exports = {url};

}
else{
  let url=  'mongodb://localhost:27017/airbono';
  module.exports = {url};
}
