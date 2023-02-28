import mongoose from "mongoose";

const adminSettingsSchema = new mongoose.Schema(
  {
    motd: { type: String, required: false },
    hours: {type: Object, required: false},
  },
  {
    timestamps: true,
  }
);

const AdminSettings =
  mongoose.models.AdminSettings ||
  mongoose.model("AdminSettings", adminSettingsSchema);

export default AdminSettings;
