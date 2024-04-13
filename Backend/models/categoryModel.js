module.exports = (sequelize,DataTypes)=>{
    const Category = sequelize.define("category" ,{
       
        CategoryName: {
            type:DataTypes.STRING,
            allowNull:false
        }
       
    })

    return Category
}

