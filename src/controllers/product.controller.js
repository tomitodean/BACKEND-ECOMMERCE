import Product from "../models/product.model.js";

async function getProducts(req, res) {
    try {
        const productos = await Product.find();
        return res.status(200).send({
            success: true,
            message: "Productos obtenidos correctamente",
            products: productos,
        })

    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return res.status(500).send({
            success: false,
            message: "Error al obtener los productos",
        })
    }
}

async function getProductById(req, res) {
    try {

        console.log(req.params.id);
        const product = await Product.findById(req.params.id);


        if (!product) {
            return res.status(404).send({
                success: false,
                message: "Producto no encontrado",
            })
        }
        return res.send({
            success: true,
            message: "Producto obtenido correctamente",
            product: product,
        })



            ;
    } catch (error) {
        console.log("Error al obtener el producto por ID:", error);
        return res.status(500).send({
            success: false,
            message: "Error al obtener el producto por ID",
        })
    }
}


async function createProduct(req, res) {

    try {
        req.body.createAt = undefined; // Evitar que el usuario establezca la fecha de creación del producto
        const producto = req.body;
        console.log(producto);

        const nuevoProducto = new Product(producto);
        console.log(nuevoProducto);

        await nuevoProducto.save()

        return res.status(201).send({
            success: true,
            message: "Producto creado correctamente",
            product: nuevoProducto,
        });
    } catch (error) {
        console.error("Error al crear el producto:", error);
        if (error.name === "ValidationError") {
            return res.status(400).send({
                success: false,
                message: "Error de validación",
            })
        }
        if (error.name === "ValidationError") {
            return res.status(500).send({
                success: false,
                message: "Error de validación",
            })
        }
        return res.status(500).send({
            success: false,
            message: "Error al crear el producto",
        })
    }
}

async function updateProduct(req, res) {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedProduct) {
            return res.status(404).send({
                success: false,
                message: "Producto no encontrado",
            })
        }

        return res.status(200).send({
            success: true,
            message: "Producto actualizado correctamente",
            product: updatedProduct,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error al actualizar el producto",
        })
    }
}

async function deleteProduct(req, res) {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).send({
                success: false,
                message: "Producto no encontrado",
            })
        }
        return res.status(200).send({
            success: true,
            message: "Producto eliminado correctamente",
            product: deletedProduct,
        })
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        return res.status(500).send({
            success: false,
            message: "Error al eliminar el producto",
        })
    }
}

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };