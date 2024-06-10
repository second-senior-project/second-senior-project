
module.exports = (sequelize, DataTypes)=> {
  
  const Message=sequelize.define("Message", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    readed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    senderId:{
      type:DataTypes.INTEGER
    },
    reciverId:{
      type:DataTypes.INTEGER
    },
    });
    
    return Message
}