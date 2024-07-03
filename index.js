import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize, Model, DataTypes } from 'sequelize';


const app = express();
const port = 3000;

const filename = "matipro.db"
console.log(filename)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: filename
});

class Book extends Model { }
Book.init({
    autor: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    editorial : DataTypes.STRING,
    paginas: DataTypes.INTEGER,
}, { sequelize, modelName: 'book' });

sequelize.sync();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Obtiene todos los libros en la base de datos
 * @param {express.Request} req - Objeto de solicitud a la base de datos
 * @param {express.Response} res - Objeto de respuesta a la base de datos
 */
app.get('/books', async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});
/**
 * Obtiene un libro por su ID.
 * @param {express.Request} req - Objeto de solicitud a la base de datos
 * @param {express.Response} res - Objeto de respuesta a la base de datos
 * @param {number} req.params.id - ID del libro.
 */
app.get('/books/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    res.json(book);
});
/**
 * Crea un nuevo libro.
 * @param {express.Request} req - Objeto de solicitud a la base de datos
 * @param {express.Response} res - Objeto de respuesta a la base de datos
 * @param {Object} req.body - Datos del libro a crear.
 */
app.post('/books', async (req, res) => {
    const book = await Book.create(req.body);
    res.json(book);
});
/**
 * Actualiza un libro existente.
 * @param {express.Request} req - Objeto de solicitud a la base de datos
 * @param {express.Response} res - Objeto de respuesta a la base de datos
 * @param {number} req.params.id - ID del libro a actualizar.
 * @param {Object} req.body - Datos actualizados del libro.
 */
app.put('/books/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (book) {
        await book.update(req.body);
        res.json(book);
    } else {
        res.status(404).json({ message: 'book not found' });
    }
});
/**
 * Elimina un libro por su ID.
 * @param {express.Request} req - Objeto de solicitud a la base de datos
 * @param {express.Response} res - Objeto de respuesta a la base de datos
 * @param {number} req.params.id - ID del libro a eliminar.
 */
app.delete('/books/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (book) {
        await book.destroy();
        res.json({ message: 'book deleted' });
    } else {
        res.status(404).json({ message: 'book not found' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});