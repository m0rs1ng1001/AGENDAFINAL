import db from "../databases/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    placa:{type: DataTypes.STRING},
    modelo:{type: DataTypes.STRING},
    tipoVehiculo:{type: DataTypes.STRING},
    marca:{type: DataTypes.STRING},
    fecha:{type: DataTypes.STRING},
    hora:{type: DataTypes.STRING},
}, {
    timestamps: false // Deshabilita las columnas createdAt y updatedAt
          });


export default BlogModel; 