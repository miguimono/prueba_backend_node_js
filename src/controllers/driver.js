import Driver from "../models/driver";
import Order from "../models/order";
import Client from "../models/client";

export async function createDriver(req, res) {
  const { name } = req.body;
  try {
    let newDriver = await Driver.create(
      {
        status: true,
        name
      },
      {
        fields: ["status", "name"]
      }
    );

    if (newDriver) {
      return res.json({ message: "Conductor creado", data: newDriver });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
export async function getDriver(req, res) {
  try {
    const driver = await Driver.findAll({
      include: [
        {
          model: Order,
          include: [
            {
              model: Client
            }
          ]
        }
      ]
    });
    res.json({ data: driver });
  } catch (error) {
    console.log(error);
  }
}
export async function deleteDriver(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCont = await Driver.destroy({
      where: {
        id_driver: id
      }
    });
    res.json({
      message: "Conductor borrada",
      count: deleteRowCont
    });
  } catch (error) {
    console.log(error);
  }
}
export async function updateDriver(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const driver = await Driver.findAll({
      attributes: ["id_driver", "name"],
      where: {
        id_driver: id
      }
    });
    if (driver.length > 0) {
      driver.forEach(async dr => {
        await dr.update({
          name
        });
      });
    }
    return res.json({
      message: "Driver updated",
      data: driver
    });
  } catch (error) {
    console.log(error);
  }
}
export async function getDriverById(req, res) {
  try {
    const { id } = req.params;
    const driverID = await Driver.findOne({
      where: {
        id_driver: id
      },
      include: [
        {
          model: Order
        }
      ]
    });
    res.json({ data: driverID });
  } catch (error) {
    console.log(error);
  }
}
export async function getDriverByDate(req, res) {
  try {
    const { date } = req.params;
    const driverID = await Driver.findOne({
      include: [
        {
          model: Order,
          where: {
            date
          }
        }
      ]
    });
    res.json({ data: driverID });
  } catch (error) {
    console.log(error);
  }
}
export async function asignDriverToOrder(req, res) {
  try {
    const { id } = req.params;
    const { id_order } = req.body;
    const driver = await Driver.findAll({
      attributes: ["id_driver", "status", "fk_id_order"],
      where: {
        id_driver: id
      },
      include: [
        {
          model: Order
        }
      ]
    });
    if (driver.length > 0) {
      driver.forEach(async dr => {
        await dr.update({
          status: false,
          fk_id_order: id_order
        });
      });
    }
    return res.json({
      message: "status updated",
      data: driver
    });
  } catch (error) {
    console.log(error);
  }
}

export async function releaseDriver(req, res) {
  try {
    const { id } = req.params;
    const driver = await Driver.findAll({
      attributes: ["id_driver", "status", "fk_id_order"],
      where: {
        id_driver: id
      },
      include: [
        {
          model: Order
        }
      ]
    });
    if (driver.length > 0) {
      driver.forEach(async dr => {
        await dr.update({
          status: true,
          fk_id_order: null
        });
      });
    }
    return res.json({
      message: "status updated",
      data: driver
    });
  } catch (error) {
    console.log(error);
  }
}
