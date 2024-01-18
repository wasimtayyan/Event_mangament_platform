import { Schema, model, models } from "mongoose";

export type IEvent = {
  title: string;
  description?: string;
  location?: string;
  createdAt?: Date;
  imageUrl: string;
  startDateTime?: Date;
  endDateTime?: Date;
  price?: string;
  isFree?: boolean;
  url?: string;
  category?: { _id: string; name: string };
  organizer?: { _id: string; firstName: string; lastName: string };
};

const EventSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, require: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: String },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Evnt || model("Event", EventSchema);

export default Event;
