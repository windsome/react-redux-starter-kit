"use strict";

module.exports = function(sequelize, DataTypes) {
    var LockLog = sequelize.define("LockLog", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        lockId: DataTypes.UUID,
        info: DataTypes.TEXT
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                /*LockLog.belongsTo(models.Lock, {
                    onDelete: "CASCADE",
                    foreignKey: 'lockId'
                });
                Lock.belongsToMany(models.User, {through: 'UserLock', timestamps: false});*/
            }
        }
    });

    return LockLog;
};
