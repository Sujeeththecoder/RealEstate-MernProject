const locationSchema = new mongoose.Schema({
    city: String,
    coordinates: {
      type: [Number], 
      index: '2dsphere' 
    },
   
  });
  
  const Location = mongoose.model('Location', locationSchema);
export default  LocationData;