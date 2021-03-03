import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { ListProductService } from '../services/ListProductService';
import { ShowProductService } from '../services/ShowProductService';
import { UpdateProductService } from '../services/UpdateProductService';

class BaseProductController {
	protected listProducts = new ListProductService();
	protected showProduct = new ShowProductService();
	protected createProduct = new CreateProductService();
	protected updateProduct = new UpdateProductService();
	protected deleteProduct = new DeleteProductService();
}

export { BaseProductController };
