import { Channel, ChannelMessage, Message } from "@/models/models";
import { NextRequest, NextResponse } from "next/server";


// in use
export async function POST(req: NextRequest) {
  const body = await req.json();
  const time = await Channel.find({
    channelid: body.channelid,
    user: body.user,
  });
  const data = await ChannelMessage.find({
    channel: body.channelid,
    user: body.user,
    time:{$gte:time[0].starttime}
  },"file message delete time").populate({
    path: "message",
    populate: { path: "user" ,select:"name"},
  }).populate({
    path:"file",
    populate:{path : "file"}
    
  });
  return NextResponse.json({ success: true, data });
}
