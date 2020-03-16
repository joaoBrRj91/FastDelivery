import Recipient from '../models/Recipient';


class RecipientController {

  async all(request, response) {
    const recipients = await Recipient.findAll({ raw: true });
    return response.json({ dataResult: recipients });
  }

  async store(request, response) {
    if (!request.body) {
      return response.status(400).json({ error: 'Data not provided' });
    }

    const { id, name, city, zipCode } = await Recipient.create(request.body);

    return response.json({
      user: {
        id,
        name,
        city,
        zipCode
      },
      date_verification: (new Date(Date.now())).toString()
    });
  }

  async update(request, response) {
    const { id } = request.params;

    if (!request.body) {
      return response.status(400).json({ error: 'Data not provided' });
    }

    if (!id) {
      return response.status(400).json({ error: 'Id data not provided' });
    }

    const oldDataRecipient = await Recipient.findByPk(id);

    if (!oldDataRecipient) {
      return response.status(403).json({ error: 'Data not provided for id' });
    }

    const newDataRecipient = await oldDataRecipient.update(request.body);

    return response.json({
      updatedRecipient: newDataRecipient,
      date_verification: (new Date(Date.now())).toString()
    });
  }

  
}

export default new RecipientController();