const People = require("../../model/People");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config;

const loginControler = async function (req, res) {
  const email = process.env.EMAIL;
  const password = process.env.PASS;

  try {
    const user = await People.find();
    if (user !== null) {
      try {
        const result = await People.find({ email: req.body.email });

        if (result.length && result[0].email === req.body.email) {
          const compare = await bcrypt.compare(
            req.body.password,
            result[0].password
          );
          if (compare) {
            const userObject = {
              email: result[0].email,
              role: result[0].role,
            };
            const token = jwt.sign(userObject, process.env.JWT_SECRATE);
            userObject.token = token;
            res.status(200).json({
              userObject,
            });
          } else {
            res.status(400).json({
              password: {
                msg: "Invlaid password",
              },
            });
          }
        } else {
          res.status(400).json({
            email: {
              msg: "Incorrect email",
            },
          });
        }
      } catch (err) {
        console.log(err);
        res.status(400).json({
          errors: {
            msg: "Internal server error",
          },
        });
      }
    } else {
      const hashedPss = await bcrypt.hash(password, 10);
      const newUer = {
        email,
        password: hashedPss,
        role: "admin",
      };

      const people = new People(newUer);

      try {
        const result = await people.save();

        if (result.email === req.body.email) {
          const compare = await bcrypt.compare(
            req.body.password,
            result.password
          );
          if (compare) {
            const userObject = {
              email: result.email,
              role: result.role,
            };
            const token = jwt.sign(userObject, process.env.JWT_SECRATE);
            userObject.token = token;
            res.status(200).json({
              userObject,
            });
          } else {
            res.status(400).json({
              errors: {
                password: {
                  msg: "Invlaid password",
                },
              },
            });
          }
        } else {
          res.status(400).json({
            errors: {
              email: {
                msg: "Incorrect email",
              },
            },
          });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          errors: {
            msg: "Internal server errors!",
          },
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: "Internal server errors",
      },
    });
  }
};

module.exports = { loginControler };
