const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const dbConfig=require('../config/dbConfig.js');

const {Sequelize,DataTypes}=require('sequelize');

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,

    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
        
    }
 }
)

sequelize.authenticate()
.then(() =>{
    console.log(`connected..`)
})
.catch(err =>{
    console.log('Error'+ err);
})
const db ={}

db.Sequelize=Sequelize
db.sequelize = sequelize

db.productmaster = require('./productModel.js')(sequelize,DataTypes)
db.categorytables=require('./categoryModel.js')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('yes re-sync done!');
})



// 1 to many Relation

db.categorytables.hasMany(db.productmaster, {
    foreignKey:'product_id',
    as:'product'
})

db.productmaster.belongsTo(db.categorytables,{
    foreignKey:'product_id',
    as:'category'
})





module.exports=db