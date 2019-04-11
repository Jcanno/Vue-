const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment');


const Comments = sequelize.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // userid: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  pics: {
    type: Sequelize.TEXT,
    allowNull: false 
  },
  createdAt: {
    type: Sequelize.DATE,
    get() {
        return moment(this.getDataValue('createdAt')).format('M月DD日 HH:mm');
    }
  },
  updatedAt: {
    type: Sequelize.DATE,
    get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
    }
  }
},{
  freezeTableName:true,
}
)

module.exports = Comments;