export default function init<MODEL_NAME_UPPER_CAMEL_CASE_SINGULAR>Model(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
    },
    billId: {
      type: DataTypes.INTEGER,
      references: {
        model: "bills",
        key: "id",
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    underscored: true
  });
};