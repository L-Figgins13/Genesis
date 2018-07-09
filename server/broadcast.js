const broadcast = (io, room, message, data) => {
  console.log("broadcast", room, message, data);

  io.in(room).emit(message, data);
};

export default broadcast;
