const ToDoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.send(toDos);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message, msg: "Error fetching ToDos" });
  }
};

module.exports.saveToDos = async (req, res) => {
  const newTodo = new ToDoModel(req.body);
  await newTodo.save()
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: err.message, msg: "Error saving ToDo" });
    });
};

module.exports.updateToDos = async (req, res) => {
  // const { id } = req.params;
  // const { todo } = req.body;

  // ToDoModel.findByIdAndUpdate(id, { todo })
  const todoId = req.params.id;
  await ToDoModel.findByIdAndUpdate(todoId, { isComplete: true }, { new: true })
    .then(() => {
    res.status(200).send("Updated Successfully...");
  })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: err.message, msg: "Error updating ToDo" });
    });
};

module.exports.deleteToDos = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("Deleted Successfully...");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: err.message, msg: "Error deleting ToDo" });
    });
};
