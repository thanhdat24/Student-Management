const logFeature = (req, res, next) => {
  console.log("đây là tính năng lấy danh sách học sinh");
  // chạy xuống middleware tiếp theo
  next();
};

module.exports = {
  logFeature,
};
