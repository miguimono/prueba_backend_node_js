import Order from "../models/order";
import Client from "../models/client";
import Address from "../models/address";

export async function createOrder(req, res) {
  const {
    name,
    lastname,
    email,
    phone,
    address,
    date,
    min_hour,
    max_hour
  } = req.body;
  try {
    console.log(parseInt(min_hour));
    console.log(parseInt(max_hour));
    console.log((parseInt(max_hour) - parseInt(min_hour)));
    if (parseInt(min_hour) <= parseInt(max_hour)) {
      if ((parseInt(max_hour) - parseInt(min_hour)) <= 8) {
        let newClient = await Client.create(
          {
            name,
            lastname,
            email,
            phone
          },
          {
            fields: ["name", "lastname", "email", "phone"]
          }
        );
        let newOrder = await Order.create(
          {
            date,
            min_hour,
            max_hour,
            fk_id_client: newClient.id_client
          },
          {
            fields: ["date", "min_hour", "max_hour", "fk_id_client"]
          }
        );
        let newAddress = await Address.create(
          {
            address,
            fk_id_client: newClient.id_client
          },
          {
            fields: ["address", "fk_id_client"]
          }
        );

        if (newClient) {
          return res.json({ message: "Cliente creado", data: newClient });
        }
        if (newOrder) {
          return res.json({ message: "Orden creada", data: newOrder });
        }
        if (newAddress) {
          return res.json({ message: "Direccion creada", data: newAddress });
        }
      } else {
        return res.json({
          message:
            "Debe haber una separacion maxima de 8 horas entre hora mininma (min_hour) y hora maxima (max_hour)"
        });
      }
    } else {
      return res.json({
        message:
          "La hora mininma (min_hour) debe ser mayor que la hora maxima (max_hour)"
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
export async function getOrder(req, res) {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Client,
          include: [
            {
              model: Address
            }
          ]
        }
      ]
    });
    res.json({ data: orders });
  } catch (error) {
    console.log(error);
  }
}
export async function getClient(req, res) {
  try {
    const clients = await Client.findAll({
      include: [
        {
          model: Address
        }
      ]
    });
    res.json({ data: clients });
  } catch (error) {
    console.log(error);
  }
}
export async function getOrderById(req, res) {
  try {
    const { id } = req.params;
    const clientID = await Client.findOne({
      where: {
        id_client: id
      },
      include: [
        {
          model: Address
        }
      ]
    });
    res.json({ data: clientID });
  } catch (error) {
    console.log(error);
  }
}
export async function deleteOrder(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCont = await Order.destroy({
      where: {
        id_order: id
      }
    });
    res.json({
      message: "Orden borrada",
      count: deleteRowCont
    });
  } catch (error) {
    console.log(error);
  }
}
export async function updateOrder(req, res) {
  try {
    const { id } = req.params;
    const { date, min_hour, max_hour } = req.body;

    const my_order = await Order.findAll({
      attributes: ["id_order", "date", "min_hour", "max_hour"],
      where: {
        id_order: id
      }
    });
    if (my_order.length > 0) {
      my_order.forEach(async order => {
        await order.update({
          date,
          min_hour,
          max_hour
        });
      });
    }
    return res.json({
      message: "Order updated",
      data: my_order
    });
  } catch (error) {
    console.log(error);
  }
}
