// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (req, res, next) {
  console.log(req.url);
  next();
}
