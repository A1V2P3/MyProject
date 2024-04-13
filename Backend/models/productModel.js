

module.exports = (sequelize,DataTypes)=>{

    const Product = sequelize.define("product" ,{
      
        ProductName: {
            type:DataTypes.STRING,
            allowNull:false 
        }
       
    })

    return Product
}

