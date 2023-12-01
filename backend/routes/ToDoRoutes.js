const { Router } = require("express")
const { getToDos, saveToDos, updateToDos, deleteToDos } = require("../contoller/ToDoController");
const router = Router()

router.get("/get", getToDos);
router.post("/save", saveToDos);
router.put("/update", updateToDos);
router.delete("/delete", deleteToDos);

module.exports = router; 
